import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import LifeStatistics from '../organisms/life-statistics';
import HeaderPanel from '../molecules/header-panel';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    const [date, setDate] = useState('');

    return (
        <div className={css(styles.main)}>
            <HeaderPanel onSelectDate={setDate} date={date} />
            <LifeStatistics date={date} />
        </div>
    );
}

export default StartPage;
