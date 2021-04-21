import Env from './Env';

const ANALYTICS = {
  GA_TRACKING_ID: process?.env?.ga_tracking_id || false,
  ENABLE_TRACKING: process?.env?.ga_track_in_dev || !Env.IS_DEV,
};

export default ANALYTICS;
