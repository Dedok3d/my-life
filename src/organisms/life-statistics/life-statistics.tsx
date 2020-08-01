import React from 'react';
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

function LifeStatistics({ }: Props) {

    return (
        <div className={css(styles.life)}>
            <RadioButton />
            <CalendarOfLife numberOfWeeks={864} completedWeeks={23} />
        </div>
    );
}

export default LifeStatistics;
