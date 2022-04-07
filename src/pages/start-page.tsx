import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import LifeStatistics from '../components/organisms/life-statistics';
import HeaderPanel from '../components/molecules/header-panel';
import OptionsPanel from '../components/organisms/options-panel';

const styles = StyleSheet.create({
    main: {
    },
    content: {
        display: 'flex',
        marginLeft: '100px',
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <HeaderPanel />

            <div className={css(styles.content)}>
                <OptionsPanel />
                <LifeStatistics />
            </div>
        </div>
    );
}

export default StartPage;
