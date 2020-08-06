import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import LifeStatistics from '../organisms/life-statistics';
import OptionsPanel from '../molecules/options-panel';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <OptionsPanel />
            <LifeStatistics />
        </div>
    );
}

export default StartPage;
