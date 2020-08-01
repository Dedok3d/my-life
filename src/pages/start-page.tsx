import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import CalendarOfLife from '../molecules/calendar-of-life';
import LifeStatistics from '../organisms/life-statistics';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <LifeStatistics />
        </div>
    );
}

export default StartPage;
