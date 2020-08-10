import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    panel: {
        // position: 'absolute',
        // marginLeft: '100px',
        width: '300px',
        height: '300px',
        backgroundColor: 'rgba(53, 120, 229, 0.5)'
    },
});

interface Props {
}

function OptionsPanel({ }: Props) {
    return (
        <div className={css(styles.panel)}>
        </div>
    );
}

export default OptionsPanel;
