import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    panel: {
        border: '1px solid rgb(0,0,0)',
        height: '100px',
        margin: '50px 100px 50px 100px',
        backgroundImage: 'linear-gradient(262deg,rgb(51, 51, 51),rgb(0, 0, 0))',
        borderRadius: '6px',
        color: 'rgb(255,255,255)',
    },
    title: {
        fontSize: '24px',
        margin: '25px',
    },
});

interface Props {
}

function OptionsPanel({ }: Props) {

    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.title)}>Календарь жизни</div>
        </div>
    );
}

export default OptionsPanel;
