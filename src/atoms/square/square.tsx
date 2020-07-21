import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    square: {
        width: '40px',
        height: '40px',
        border: '1px solid rgb(0,0,0)'
    },
});

interface Props { }

function Square(props: Props) {

    return (
        <div className={css(styles.square)}>
        </div>
    );
}

export default Square;
