import React, { useState } from 'react';
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

const intervals = ['Недели', 'Месяцы', 'Годы'];

function LifeStatistics({ }: Props) {
    const [interval, setInterval] = useState(intervals[0]);

    return (
        <div className={css(styles.life)}>
            <RadioButton options={intervals} defaultValue={interval} onSelect={setInterval} />
            <CalendarOfLife numberOfWeeks={864} completedWeeks={23} />
        </div>
    );
}

export default LifeStatistics;
