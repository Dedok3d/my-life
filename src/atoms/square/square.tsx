import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    square: {},
});

interface Props { }

function Square(props: Props) {

    return (
        <div className={css(styles.square)}>
        </div>
    );
}

export default Square;
