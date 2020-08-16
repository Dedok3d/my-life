import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

import RadioButton from '../../atoms/radio-button';
import CalendarOfLife from '../../molecules/calendar-of-life';
import { Intervals, LIFE_AVERAGE_DURATION, MONTHS_OF_YAER, WEEKS_OF_MOUNTH } from '../../../models';

const styles = StyleSheet.create({
    life: {
        marginLeft: '100px',
        width: '800px',
    },
});

interface Props {
}


const intervals = [Intervals.week, Intervals.month, Intervals.year];

function LifeStatistics({ }: Props) {
    const [interval, setInterval] = useState(`${Intervals.year}`);
    const [numberOfSquares, setNumberOfSquares] = useState(LIFE_AVERAGE_DURATION);

    const calculateSquares = (option: string) => {
        let count = LIFE_AVERAGE_DURATION;

        if (option === Intervals.month || option === Intervals.week) {
            count *= MONTHS_OF_YAER;
        }

        if (option === Intervals.week) {
            count *= WEEKS_OF_MOUNTH;
        }

        return count;
    };

    const onSelect = (option: string) => {
        setNumberOfSquares(calculateSquares(option));
        setInterval(option);
    };

    useEffect(() => onSelect(interval))

    return (
        <div className={css(styles.life)}>
            <RadioButton options={intervals} defaultValue={interval} onSelect={onSelect} />
            <CalendarOfLife numberOfSquares={numberOfSquares} iternal={interval} />
        </div>
    );
}

export default LifeStatistics;
