import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    panel: {
        border: '1px solid rgb(0,0,0)',
        position: 'fixed',
        height: '40%',
        width: '20%',
        top: '20%',
        left: '3%',
    },
});

interface Props {
}

function OptionsPanel({ }: Props) {

    return (
        <div className={css(styles.panel)}>
            <img src={require('../../../assets/smiling.png')} />
        </div>
    );
}

export default OptionsPanel;
