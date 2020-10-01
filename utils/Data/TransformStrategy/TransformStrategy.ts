import * as R from 'ramda';

import { StratLegOpt, StratLegOptDef } from 'opc-types/lib/StratLegOpt';
import { StratLegStock, StratLegStockDef } from 'opc-types/lib/StratLegStock';
import { StratLeg, StratLegDef } from 'opc-types/lib/StratLeg';
import { StratMenu } from 'opc-types/lib/StratMenu';
import { StrategiesDef } from 'opc-types/lib/Strategies';
import { Strategy, StrategyDef } from 'opc-types/lib/Strategy';
import { DisplayValueTypes } from 'opc-types/lib/DisplayValueTypes';
import { PriceData } from 'opc-types/lib/PriceData';
import { PRICE_RESULT } from '../../../types/enums/PRICE_RESULT';
import { MATRIX_YAXIS_TYPES } from '../../../types/enums/MATRIX_YAXIS_TYPES';
import mapObj from '../mapObj/mapObj';
import ifUndef from '../ifUndef/ifUndef';
import { PREFERENCES } from '../../../config/Preferences';

import getBestCurVol from '../../Finance/getBestCurVol';
import { TIME_DECAY_BASIS } from '../../../types/enums/TIME_DECAY_BASIS';

/**
 * Service for transforming calculation data from one structure to another
 *
 * Requires knowledge of the structure of Strategies, and assists in setting
 * the required structure of calc_init state
 */

type Cfg = {
  timeDecayBasis?: TIME_DECAY_BASIS;
  defaultDisplayValueType?: DisplayValueTypes;
  defaultMatrixSecondaryYAxisType?: MATRIX_YAXIS_TYPES;
  defaultSymbol?: string;
  prices?: PriceData;
};

const TransformStrategy = {
  stratToInitialState: (stratObj: StrategyDef, cfg: Cfg = {}): Strategy => {
    return {
      id: null,
      ...stratObj,
      metadata: {
        ...stratObj.metadata,
        keywords: ifUndef(stratObj.metadata.keywords, []),
        category: {
          ...stratObj.metadata.category,
          naked: false,
          married: false,
        },
      },
      settings: {
        ...stratObj.settings,
        showLinkOpTypes: ifUndef(stratObj.settings?.showLinkOpTypes, false),
        showLinkExpiries: ifUndef(stratObj.settings?.showLinkExpiries, false),
        showLinkStrikes: ifUndef(stratObj.settings?.showLinkStrikes, false),
        showLinkNum: ifUndef(stratObj.settings?.showLinkNum, false),
      },
      changeOpType: ifUndef(stratObj.defaults.changeOpType, false),
      changeAct: ifUndef(stratObj.defaults.changeAct, false),
      linkExpiries: ifUndef(stratObj.defaults.linkExpiries, false),
      linkStrikes: ifUndef(stratObj.defaults.linkStrikes, false),
      linkOpTypes: ifUndef(stratObj.defaults.linkOpTypes, false),
      linkNum: ifUndef(stratObj.defaults.linkNum, false),
      ...stratObj.defaults,
      timeFrame: null,
      legs: stratObj.legs || Object.keys(stratObj.legsById),
      legsById: mapObj<StratLegDef, StratLeg>(
        TransformStrategy.default_leg(cfg),
      )(stratObj.legsById),
      displayValueType:
        cfg.defaultDisplayValueType || PREFERENCES.DEFAULT_DISPLAY_VALUE_TYPE,
      matrixSecondaryYAxisType:
        cfg.defaultMatrixSecondaryYAxisType ||
        PREFERENCES.DEFAULT_MATRIX_YAXIS_TYPE,
      ivShift: 0,
      atmIV:
        (cfg.prices?.result === PRICE_RESULT.SUCCESS &&
          cfg.timeDecayBasis &&
          getBestCurVol(cfg.prices, { timeDecayBasis: cfg.timeDecayBasis })) ||
        null,
      timeOfCalculation: null,
      originalEstimate: null,
      priceRange: [null, null],
    };
  },

  default_leg: (cfg: Cfg) => (obj: StratLegDef): StratLeg => {
    switch (obj.type) {
      case 'stock':
        return TransformStrategy.default_stockLeg(obj, cfg);
      case 'option':
        return TransformStrategy.default_optionLeg(obj);
      default:
        throw new Error('unknown element in strategy');
    }
  },

  default_stockLeg: (obj: StratLegStockDef, cfg: Cfg): StratLegStock => {
    const defaults = {
      act: obj.defaults?.act || null,
      name: obj.defaults?.name || 'Underlying stock symbol',
      num: obj.defaults?.num || null,
      linkNum: Boolean(obj.settings?.suggestedNumEle) || false,
      val: cfg.defaultSymbol || obj.defaults?.val || '',
      curPriceUpdated: (cfg.defaultSymbol && cfg.prices?.retrievedTime) || null,
      curPriceBid: (cfg.defaultSymbol && cfg.prices?.stock?.bid) || null,
      curPriceAsk: (cfg.defaultSymbol && cfg.prices?.stock?.ask) || null,
      curPriceLast: (cfg.defaultSymbol && cfg.prices?.stock?.last) || null,
      price: null,
    };
    return {
      type: 'stock',
      ...defaults,
      settings: {
        allowPurchase: obj.settings?.allowPurchase || false,
        changeAct: obj.settings?.changeAct || false,
        suggestedNum: obj.settings?.suggestedNum || [],
        suggestedNumEle: obj.settings?.suggestedNumEle || [],
      },
      defaults: {
        ...defaults,
        ...obj.defaults,
      },
    };
  },

  default_optionLeg: (obj: StratLegOptDef): StratLegOpt => {
    const defaults = {
      name: obj.defaults?.name || 'Option',
      act: obj.defaults?.act || null,
      opType: obj.defaults?.opType || null,
      // expiry: obj.defaults?.expiry || null,
      // iv: obj.defaults?.iv || null,
      num: obj.defaults?.num || null,
      underlying: obj.defaults?.underlying || '',
      // price: obj.defaults?.price || null,
      // inputStyle: obj.defaults?.inputStyle || null,
      showDetails: obj.defaults?.showDetails || false,
      showGreeks: obj.defaults?.showGreeks || false,
      showExitPrice: obj.defaults?.showExitPrice || false,
      linkNum: Boolean(obj.settings?.suggestedNumEle),
    };
    return {
      type: 'option',
      expiry: null,
      iv: null,
      price: null,
      priceRange: [null, null],
      strike: null,
      ...defaults,
      settings: {
        renamable: ifUndef(obj.settings?.renamable, true),
        // changeAct: ifUndef(obj.settings?.changeAct, false),
        // changeOpType: ifUndef(obj.settings?.changeOpType, false),
        // showUnderlying: ifUndef(obj.settings?.showUnderlying, false),
        suggestedNumEle: ifUndef(obj.settings?.suggestedNumEle, undefined),
        suggestedNum: ifUndef(obj.settings?.suggestedNum, []),
        suggestedStrikeEle: ifUndef(
          obj.settings?.suggestedStrikeEle,
          undefined,
        ),
      },
      defaults,
    };
  },

  stratsToStratMenu: (
    strats: StrategiesDef,
    groupBy: string = 'complexity',
  ): StratMenu =>
    R.pipe(
      (s: StrategiesDef) => Object.values(s) as StrategyDef[],
      R.map((s) => ({
        access: s.settings.access,
        category: {
          // naked: false,
          ...s.metadata.category,
        },
        stratKey: s.metadata.stratKey,
        ...R.pick(['title'], s),
      })),
      R.reduce(
        (accStratMenu, partStrat) => {
          // @ts-ignore (I have provided fallback)
          if (R.isNil(accStratMenu[partStrat.category[groupBy] || ''])) {
            // eslint-disable-next-line no-param-reassign
            // @ts-ignore
            accStratMenu[partStrat.category[groupBy]] = [partStrat];
            return accStratMenu;
          }
          // @ts-ignore (I have provided fallback)
          accStratMenu[partStrat.category[groupBy] || ''].push(partStrat);
          return accStratMenu;
        },
        // eslint-disable-next-line
        {} as StratMenu,
      ),
    )(strats),
};

export default TransformStrategy;
