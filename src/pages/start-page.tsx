import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import LifeStatistics from '../organisms/life-statistics';
import OptionsPanel from '../molecules/options-panel';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    const [date, setDate] = useState('1989.12.12');

    return (
        <div className={css(styles.main)}>
            <OptionsPanel onSelectDate={setDate} date={date} />
            <LifeStatistics date={date} />
        </div>
    );
}

export default StartPage;
