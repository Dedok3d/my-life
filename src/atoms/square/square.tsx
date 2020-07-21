import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    square: {
        width: '20px',
        height: '20px',
        border: '1px solid rgb(0,0,0)'
    },
});

interface Props {
    fill: boolean;
}

function Square({ fill }: Props) {

    return (
        <div style={fill ? { background: 'rgb(255,204,204)' } : undefined} className={css(styles.square)}>
        </div>
    );
}

export default Square;
