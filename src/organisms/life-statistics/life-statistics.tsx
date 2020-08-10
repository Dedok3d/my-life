import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import RadioButton from '../../atoms/radio-button';
import CalendarOfLife from '../../molecules/calendar-of-life';
import moment from 'moment';

const styles = StyleSheet.create({
    life: {
        marginLeft: '100px',
        width: '800px',
    },
});

interface Props {
    date: string;
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

function LifeStatistics({ date }: Props) {
    const bornDate = moment(date);
    const nowDate = moment();

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

    const calculateCompletedSquares = (option: string) => {
        if (!bornDate.isValid) {
            return 0;
        }

        if (option === Intervals.week) {
            return nowDate.diff(bornDate, 'weeks');
        }

        if (option === Intervals.month) {
            return nowDate.diff(bornDate, 'months');
        }

        return nowDate.diff(bornDate, 'years');
    };

    const [interval, setInterval] = useState(`${Intervals.year}`);
    const [numberOfSquares, setNumberOfSquares] = useState(LIFE_AVERAGE_DURATION);
    const [completedSquares, setCompletedSquares] = useState(calculateCompletedSquares(Intervals.year));

    const onSelect = (option: string) => {
        setNumberOfSquares(calculateSquares(option));
        setInterval(option);
        setCompletedSquares(calculateCompletedSquares(option));
    };

    useEffect(() => onSelect(interval), [date])

    return (
        <div className={css(styles.life)}>
            <RadioButton options={intervals} defaultValue={interval} onSelect={onSelect} />
            <CalendarOfLife numberOfSquares={numberOfSquares} completedSquares={completedSquares} />
        </div>
    );
}

export default LifeStatistics;
