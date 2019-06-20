import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, object, boolean } from '@storybook/addon-knobs';

import { COLORS, CARD_SIZES } from '../../constants/LayoutConstants';
import { getCardMinSize } from '../../utils/componentUtilityFunctions';
import { getIntervalChartData, chartData } from '../../utils/sample';

import TimeSeriesCard from './TimeSeriesCard';

// need a timeOffset to make the data always show up
// const timeOffset = new Date().getTime() - Object.values(chartData.dataItemToMostRecentTimestamp)[0];
storiesOf('TimeSeriesCard (Experimental)', module)
  .add('medium / single line - interval hour', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    // console.log(getIntervalChartData('day', 30, { min: 10, max: 100 }, 100));
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],
            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 10, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time t'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 10, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval hour (Same day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('minute', 10, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval hour (Diff day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 24, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day (Week)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 12, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day (Month)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 30, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval day (Same Month)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 19, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval month (Year/ Same Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 6, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('medium / single line - interval month (Year/ Diff Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.MEDIUM);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 12, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval hour (Same day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('minute', 15, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval hour (Diff day)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('hour', 32, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day (Week)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 24, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day (Month)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 30, { min: 10, max: 100 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval month (Year/ Same Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 6, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval month (Year/ Diff Year)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('month', 12, { min: 10, max: 100 }, 100)}
          interval="month"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day (High Temperature number)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 12, { min: 2000, max: 7000 }, 100)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / single line - interval day (Low Pressure number)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Pressure')}
          id="facility-Pressure"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Pressure'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 10, { min: 10, max: 100 }, 1000)}
          interval="day"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / multi line - no interval', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                // color: text('color', COLORS.PURPLE),
              },
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                // color: text('color', COLORS.PURPLE),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('day', 12, { min: 10, max: 100 }, 100)}
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / multi line - (Custom color)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: text('color', COLORS.MAGENTA),
              },
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                color: text('color', COLORS.TEAL),
              },
            ],

            xLabel: text('xLabel', 'Time'),
            yLabel: text('yLabel', 'Temperature (˚F)'),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('minute', 12, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('large / multi line - (No X/Y Label)', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: text('color', COLORS.MAGENTA),
              },
              {
                label: 'Pressure',
                dataSourceId: 'pressure',
                color: text('color', COLORS.TEAL),
              },
            ],

            xLabel: text('xLabel', ''),
            yLabel: text('yLabel', ''),
            timeDataSourceId: 'timestamp',
          })}
          values={getIntervalChartData('minute', 12, { min: 10, max: 100 }, 100)}
          interval="hour"
          breakpoint="lg"
          size={size}
        />
      </div>
    );
  })
  .add('empty', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: COLORS.PURPLE,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          interval="hour"
          breakpoint="lg"
          values={[]}
          size={size}
        />
      </div>
    );
  })
  .add('empty for a range', () => {
    const size = select('size', Object.keys(CARD_SIZES), CARD_SIZES.LARGE);
    return (
      <div style={{ width: `${getCardMinSize('lg', size).x}px`, margin: 20 }}>
        <TimeSeriesCard
          title={text('title', 'Temperature')}
          id="facility-temperature"
          isLoading={boolean('isLoading', false)}
          content={object('content', {
            series: [
              {
                label: 'Temperature',
                dataSourceId: 'temperature',
                color: COLORS.PURPLE,
              },
            ],
            timeDataSourceId: 'timestamp',
          })}
          range="day"
          interval="hour"
          breakpoint="lg"
          values={chartData.events.slice(0, 20)}
          size={size}
        />
      </div>
    );
  });
