import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    square: {
        width: '30px',
        height: '30px',
        border: '1px solid rgb(0,0,0)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    span: {
    }
});

interface Props {
    fill: boolean;
    num?: number;
}

function Square({ fill, num }: Props) {

    return (
        <div className={css(styles.square)} style={fill ? { background: 'rgb(255,204,204)' } : undefined}>
            <span className={css(styles.span)}>{num}</span>
        </div>
    );
}

export default Square;
