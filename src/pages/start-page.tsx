import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import LifeStatistics from '../components/organisms/life-statistics';
import HeaderPanel from '../components/molecules/header-panel';
import OptionsPanel from '../components/organisms/options-panel';
import { changeFirstName } from '../store/actions';

const styles = StyleSheet.create({
    main: {
    },
    content: {
        display: 'flex',
        marginLeft: '100px',
    },
});

interface RootState {
    firstName: string;
}

const mapStateToProps = (state: RootState) => ({
    firstName: state.firstName
});

const mapDispatchToProps = ({
    changeFirstName: changeFirstName
});

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function StartPage({ firstName, changeFirstName }: Props) {
    const [date, setDate] = useState('');


    return (
        <div className={css(styles.main)}>
            <input
                type="text"
                value={firstName}
                onChange={(e) => {
                    changeFirstName(e.target.value);
                }}
            />
            <HeaderPanel onSelectDate={setDate} date={date} />

            <div className={css(styles.content)}>
                <OptionsPanel />
                <LifeStatistics date={date} />
            </div>
        </div>
    );
}

export default connector(StartPage);
