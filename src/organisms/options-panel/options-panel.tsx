import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import OptionCard from '../../molecules/option-card';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
});

interface Props {
}

function OptionsPanel({ }: Props) {
    return (
        <div className={css(styles.panel)}>
            <OptionCard />
        </div>
    );
}

export default OptionsPanel;
