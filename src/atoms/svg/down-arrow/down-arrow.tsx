import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    icon: {
        width: '16px',
        height: '16px',
        marginLeft: '2px'
    }
});

interface Props {
}

function DownArrow({ }: Props) {

    return (
        <svg className={css(styles.icon)} viewBox="0 0 16 16" >
            <path fill="rgb(255,255,255)" d="M3.293 7.707a1 1 0 011.414-1.414L8 9.586l3.293-3.293a1 1 0 011.414 1.414L9.414 11a2 2 0 01-2.828 0L3.293 7.707z">
            </path>
        </svg >
    );
}

export default DownArrow;
