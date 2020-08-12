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
        margin: '3px',
    },
    span: {
    }
});

interface Props {
    fill: boolean;
    num?: number;
    color?: string;
}

function Square({ fill, num, color }: Props) {

    return (
        <div key={num} className={css(styles.square)} style={fill ? { background: color || 'rgba(53, 120, 229, 0.5)' } : undefined}>
            <span className={css(styles.span)}>{num}</span>
        </div>
    );
}

export default Square;
