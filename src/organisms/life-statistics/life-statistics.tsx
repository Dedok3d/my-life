import React, { useState, useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import RadioButton from '../../atoms/radio-button';
import CalendarOfLife from '../../molecules/calendar-of-life';

const styles = StyleSheet.create({
    life: {
        margin: 'auto',
        width: '50%',
    },
});

interface Props {
}

enum Intervals {
    week = 'Недели',
    month = 'Месяцы',
    year = 'Годы',
};

const LIFE_AVERAGE_DURATION = 72;
const MONTHS_OF_YAER = 12;
const WEEKS_OF_MOUNTH = 4;

const intervals = [Intervals.week, Intervals.month, Intervals.year];

function LifeStatistics({ }: Props) {
    const date = new Date('1989-01-19');
    const nowDate = new Date();

    const [interval, setInterval] = useState(`${Intervals.year}`);
    const [numberOfSquares, setNumberOfSquares] = useState(LIFE_AVERAGE_DURATION);

    const onSelect = (option: string) => {
        setNumberOfSquares(calculateSquares(option));
        setInterval(option);
    };

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


    return (
        <div className={css(styles.life)}>
            <RadioButton options={intervals} defaultValue={interval} onSelect={onSelect} />
            <CalendarOfLife numberOfSquares={numberOfSquares} completedSquares={23} />
        </div>
    );
}

export default LifeStatistics;
