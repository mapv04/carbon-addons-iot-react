import React from 'react';
import { text, select, object, boolean, number } from '@storybook/addon-knobs';
import { Bee16, Checkmark16 } from '@carbon/icons-react';
import { spacing05 } from '@carbon/layout';

import { CARD_SIZES, CARD_DATA_STATE } from '../../constants/LayoutConstants';
import { getCardMinSize } from '../../utils/componentUtilityFunctions';
import { getDataStateProp } from '../Card/Card.story';

import ValueCard from './ValueCard';
import ValueCardREADME from './ValueCard.mdx';

export default {
  title: '1 - Watson IoT/ValueCard',

  parameters: {
    component: ValueCard,
    docs: {
      page: ValueCardREADME,
    },
  },
};

export const SmallLongNoUnits = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.SMALL);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title="Tagpath"
        id="facilitycard"
        content={{
          attributes: [
            {
              label: 'Tagpath',
              dataSourceId: 'footTraffic',
            },
          ],
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          footTraffic: text(
            'occupancy',
            'rutherford/rooms/northadd/ah2/ft_supflow/eurutherford/rooms/northadd/ah2/ft_supflow/eu'
          ),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

SmallLongNoUnits.storyName = 'with long text and no units';

SmallLongNoUnits.parameters = {
  info: {
    text: 'In the case of having a long string value with no units, there is extra room to wrap the text to two lines. This makes it easier to read without needing to mouse over the text value.',
  },
};

export const WithTrends = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.SMALL);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Foot Traffic - {a-variable}')}
        id="facilitycard"
        cardVariables={object('variables', {
          'a-variable': 'working',
        })}
        content={{
          attributes: [
            {
              dataSourceId: 'footTraffic',
              label: text('content.attributes[0].label', 'Walkers'),
              secondaryValue: {
                dataSourceId: 'trend',
                trend: select('content.attributes[0].secondaryValue.trend', ['up', 'down'], 'down'),
                color: select(
                  'content.attributes[0].secondaryValue.color',
                  ['red', 'green'],
                  'red'
                ),
              },
            },
          ],
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          footTraffic: number('values.footTraffic', 13572),
          trend: text('values.trend', '22%'),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

WithTrends.storyName = 'with trends, variables, and label';

export const WithThresholds = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.SMALL);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Alert Count')}
        id="facilitycard"
        renderIconByName={(name, props = {}) =>
          name === 'bee' ? (
            <Bee16 {...props}>
              <title>{props.title}</title>
            </Bee16>
          ) : name === 'checkmark' ? (
            <Checkmark16 {...props}>
              <title>{props.title}</title>
            </Checkmark16>
          ) : (
            <span>Unknown</span>
          )
        }
        content={{
          attributes: [
            {
              dataSourceId: 'alertCount',
              thresholds: [
                {
                  comparison: '>',
                  value: 5,
                  icon: select(
                    'content.attributes[0].thresholds[0].icon',
                    ['bee', 'checkmark', 'undefined'],
                    'bee'
                  ),
                  color: select(
                    'content.attributes[0].thresholds[0].color',
                    ['red', 'green', 'yellow'],
                    'green'
                  ),
                },
              ],
            },
          ],
        }}
        breakpoint={breakpoint}
        size={size}
        values={{ alertCount: number('values.alertCount', 70) }}
        customFormatter={(formattedValue) => {
          return text('Custom Value', formattedValue);
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

WithThresholds.storyName = 'with thresholds, custom icon renderer, and custom formatter';

export const SmallWideThresholdsString = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.SMALLWIDE);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Status')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              dataSourceId: 'status',
              thresholds: [
                {
                  comparison: '=',
                  value: 'Healthy',
                  icon: 'checkmark',
                  color: 'green',
                },
                {
                  comparison: '=',
                  value: 'Unhealthy',
                  icon: 'close',
                  color: 'red',
                },
              ],
            },
          ]),
        }}
        breakpoint={breakpoint}
        size={size}
        values={{ status: text('status', 'Unhealthy') }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

SmallWideThresholdsString.storyName = 'with thresholds (string)';

export const MediumThin3 = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUMTHIN);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Facility Conditions')}
        id="facilitycard"
        content={{
          attributes: [
            {
              label: 'Comfort Level',
              dataSourceId: 'comfortLevel',
              unit: '%',
              thresholds: [
                {
                  comparison: '>',
                  value: 80,
                  color: '#F00',
                  icon: 'warning',
                },
                {
                  comparison: '<',
                  value: 80,
                  color: '#5aa700',
                  icon: 'checkmark',
                },
              ],
            },
            {
              label: 'Average Temperature',
              dataSourceId: 'averageTemp',
              unit: '˚F',
              precision: 1,
              thresholds: [
                {
                  comparison: '>',
                  value: 80,
                  color: '#F00',
                  icon: 'warning',
                },
                {
                  comparison: '<',
                  value: 80,
                  color: '#5aa700',
                  icon: 'checkmark',
                },
              ],
            },
            {
              label: 'Humidity',
              dataSourceId: 'humidity',
              unit: '˚F',
              precision: 1,
              thresholds: [
                {
                  comparison: '>',
                  value: 80,
                  color: '#F00',
                  icon: 'warning',
                },
                {
                  comparison: '<',
                  value: 80,
                  color: '#5aa700',
                  icon: 'checkmark',
                },
              ],
            },
          ],
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          comfortLevel: number('comfortLevel', 345678234234234234),
          averageTemp: number('averageTemp', 456778234234234234),
          humidity: number('humidity', 88888678234234234234),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

MediumThin3.storyName = 'with three data points and thresholds';

export const WithFourDataPoints = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.SMALLWIDE);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Status')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              dataSourceId: 'status',
              label: 'Status',
            },
            {
              dataSourceId: 'comfortLevel',
              label: 'Comfort level',
            },
            {
              dataSourceId: 'occupancy',
              label: 'Occupancy',
            },
            {
              dataSourceId: 'humidity',
              label: 'Humidity',
            },
          ]),
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          status: text('status', 'Good'),
          comfortLevel: text('comfortLevel', 'Healthy'),
          occupancy: text('occupancy', 'None'),
          humidity: text('humidity', 'Unbearable'),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

WithFourDataPoints.storyName = 'with four data points';

export const Large5 = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Facility Conditions')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              label: 'Comfort Level',
              dataSourceId: 'comfortLevel',
              unit: '%',
            },
            {
              label: 'Average Temperature',
              dataSourceId: 'averageTemp',
              unit: '˚F',
              precision: 1,
            },
            { label: 'Utilization', dataSourceId: 'utilization', unit: '%' },
            { label: 'Humidity', dataSourceId: 'humidity', unit: '%' },
            { label: 'Air Flow', dataSourceId: 'air_flow' },
          ]),
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          comfortLevel: number('comfortLevel', 89),
          averageTemp: number('averageTemp', 76.7),
          utilization: number('utilization', 76),
          humidity: number('humidity', 50),
          air_flow: number('air_flow', 0.567),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

Large5.storyName = 'with five data points';

export const LargeThin6 = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGETHIN);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Facility Conditions')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              label: 'Comfort Level',
              dataSourceId: 'comfortLevel',
              unit: '%',
            },
            {
              label: 'Average Temperature',
              dataSourceId: 'averageTemp',
              unit: '˚F',
              precision: 1,
            },
            { label: 'Utilization', dataSourceId: 'utilization', unit: '%' },
            { label: 'CPU', dataSourceId: 'cpu', unit: '%' },
            { label: 'Humidity', dataSourceId: 'humidity', unit: '%' },
            { label: 'Location', dataSourceId: 'location' },
            { label: 'Air quality', dataSourceId: 'air_quality', unit: '%' },
          ]),
        }}
        breakpoint={breakpoint}
        size={size}
        values={{
          comfortLevel: number('comfortLevel', 89),
          averageTemp: number('averageTemp', 76.7),
          utilization: number('utilization', 76),
          humidity: number('humidity', 76),
          cpu: number('cpu', 76),
          location: text('location', 'Australia'),
          air_quality: number('air_quality', 76),
        }}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

LargeThin6.storyName = 'with six data points';

export const DataStateNoDataMediumScrollPage = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');

  const myDataState = {
    type: select('dataState.type', Object.keys(CARD_DATA_STATE), CARD_DATA_STATE.NO_DATA),
    ...getDataStateProp(),
    learnMoreElement: (
      <button
        type="button"
        onClick={() => {
          console.info('Learning more is great');
        }}
      >
        Learn more
      </button>
    ),
    icon: boolean('use custom icon', false) ? (
      <Bee16 style={{ fill: 'orange' }}>
        <title>App supplied icon</title>
      </Bee16>
    ) : undefined,
  };

  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Health score')}
        content={{
          attributes: [{ label: 'Monthly summary', dataSourceId: 'monthlySummary' }],
        }}
        dataState={myDataState}
        breakpoint={breakpoint}
        size={size}
        id="myStoryId"
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
      />

      <div style={{ height: '150vh' }} />
    </div>
  );
};

DataStateNoDataMediumScrollPage.storyName = 'with data state, custom icon';

export const Editable = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Really really really long card title?')}
        id="facilitycard"
        isEditable
        content={{
          attributes: [
            {
              label: 'Monthly summary',
              dataSourceId: 'monthlySummary',
              unit: text('unit', 'Wh'),
            },
            {
              label: 'Yearly summary',
              dataSourceId: 'yearlySummary',
              unit: text('unit', 'Wh'),
            },
          ],
        }}
        breakpoint={breakpoint}
        size={size}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

Editable.storyName = 'with isEditable';

export const DataFilters = () => {
  const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
  const breakpoint = select('breakpoint', ['lg', 'md', 'sm', 'xs'], 'lg');
  return (
    <div
      style={{
        width: text('cardWidth', `${getCardMinSize(breakpoint, size).x}px`),
        margin: spacing05 + 4,
      }}
    >
      <ValueCard
        title={text('title', 'Facility Conditions per device')}
        id="facilitycard"
        content={{
          attributes: object('content.attributes', [
            {
              label: 'Device 1 Comfort',
              dataSourceId: 'comfortLevel',
              unit: '%',
              dataFilter: { deviceid: '73000' },
            },
            {
              label: 'Device 2 Comfort',
              dataSourceId: 'comfortLevel',
              unit: '%',
              dataFilter: { deviceid: '73001' },
            },
          ]),
        }}
        breakpoint={breakpoint}
        size={size}
        values={object('values', [
          { deviceid: '73000', comfortLevel: '100', unit: '%' },
          { deviceid: '73001', comfortLevel: '50', unit: '%' },
        ])}
        isNumberValueCompact={boolean('isNumberValueCompact', false)}
        locale={select('locale', ['de', 'fr', 'en', 'ja'], 'en')}
        fontSize={number('fontSize', 42)}
      />
    </div>
  );
};

DataFilters.storyName = 'with dataFilters';
