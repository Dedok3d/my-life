import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    calendar: {
        width: '40px',
        height: '40px',
        border: '1px solid rgb(0,0,0)'
    },
});

interface Props { }

function CalendarOfLife(props: Props) {

    return (
        <div className={css(styles.calendar)}>
        </div>
    );
}

export default CalendarOfLife;
