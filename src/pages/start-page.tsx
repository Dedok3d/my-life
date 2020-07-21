import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import CalendarOfLife from '../molecules/calendar-of-life';


const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <CalendarOfLife numberOfWeeks={11} completedWeeks={3} />
        </div>
    );
}

export default StartPage;
