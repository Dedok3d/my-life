import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

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

interface RootState {
}

const mapStateToProps = (state: RootState) => ({});

const connector = connect(mapStateToProps, {});

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function StartPage({ }: Props) {
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

export default connector(StartPage);
