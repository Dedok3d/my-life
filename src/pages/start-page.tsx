import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import LifeStatistics from '../organisms/life-statistics';
import HeaderPanel from '../molecules/header-panel';
import OptionsPanel from '../organisms/options-panel';

const styles = StyleSheet.create({
    main: {
    },
    content: {
        display: 'flex',
        marginLeft: '100px',
    },
});

function StartPage() {
    const [date, setDate] = useState('');

    return (
        <div className={css(styles.main)}>
            <HeaderPanel onSelectDate={setDate} date={date} />

            <div className={css(styles.content)}>
                <OptionsPanel />
                <LifeStatistics date={date} />
            </div>
        </div>
    );
}

export default StartPage;
