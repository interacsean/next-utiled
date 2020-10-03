import React from 'react';
import { CompWithChildren } from '../../types/util/CompWithChildren';
import Link from '../../pwa/components/primitives/Link';
import Box from '../../pwa/components/primitives/Box';
import StorybookCtnrView from '../../pwa/components/layouts/StorybookCtnr';

export default function Stories({ children }: CompWithChildren) {
  return (
    <Box className="flex" ph={1} pv={1 / 2}>
      <ul style={{ width: '180px' }}>
        <li>
          <Box mt={1 / 2}>
            <strong>Theme</strong>
            <ul>
              <li>
                <Link to="/stories/theme/box">Box</Link>
              </li>
              <li>
                <Link to="/stories/theme/pad">Padding / margin</Link>
              </li>
              <li>
                <Link to="/stories/theme/typo">Typo</Link>
              </li>
              <li>
                <Link to="/stories/theme/grid-cols">Grid Cols</Link>
              </li>
              <li>
                <Link to="/stories/theme/color">Color</Link>
              </li>
            </ul>
          </Box>
        </li>
        <li>
          <Box mt={1 / 2}>
            <strong>Primitives</strong>
            <ul>
              <li>
                <Link to="/stories/primitives/card">Card</Link>
              </li>
              <li>
                <Link to="/stories/primitives/input">Input</Link>
              </li>
              <li>
                <Link to="/stories/primitives/button">Button</Link>
              </li>
              <li>
                <Link to="/stories/primitives/icon">Icon</Link>
              </li>
              <li>
                <Link to="/stories/primitives/switch-toggle">
                  Switch Toggle
                </Link>
              </li>
              <li>
                <Link to="/stories/primitives/autocomplete">Autocomplete</Link>
              </li>
              <li>
                <Link to="/stories/primitives/expandable-group">
                  Expandable-group
                </Link>
              </li>
              <li>
                <Link to="/stories/primitives/spinner">Spinner</Link>
              </li>
              <li>
                <Link to="/stories/primitives/loading-text">Loading text</Link>
              </li>
              <li>
                <Link to="/stories/primitives/mobile-menu">Mobile menu</Link>
              </li>
              <li>
                <Link to="/stories/primitives/leg-indicator">
                  Leg indicator
                </Link>
              </li>
              <li>
                <Link to="/stories/primitives/modal">Modal</Link>
              </li>
              <li>
                <Link to="/stories/primitives/toast-notification">
                  Toast Notifications
                </Link>
              </li>
              <li>
                <Link to="/stories/primitives/tooltip">Tooltip</Link>
              </li>
              <li>
                <Link to="/stories/primitives/slider">Slider</Link>
              </li>
              <li>
                <Link to="/stories/primitives/field-set">FieldSet</Link>
              </li>
              <li>
                <Link to="/stories/primitives/dropdown">Primitive</Link>
              </li>
              <li>
                <Link to="/stories/primitives/input-label">InputLabel</Link>
              </li>
              <li>
                <Link to="/stories/primitives/help-icon">HelpIcon</Link>
              </li>
              {/* cursor:primitives */}
            </ul>
          </Box>
        </li>
        <li>
          <Box mt={1 / 2}>
            <strong>Charts</strong>
            <ul>
              <li>
                <Link to="/stories/charts/linechart">Line Chart</Link>
              </li>
            </ul>
          </Box>
        </li>
      </ul>
      <Box className="flex-1" style={{ width: 'calc(100vw - 280px)' }}>
        <StorybookCtnrView>{children}</StorybookCtnrView>
      </Box>
    </Box>
  );
}
