import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import OptionCard from '../../molecules/option-card';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        justifyContent: 'center',
        width: '300px',
        height: '300px',
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
