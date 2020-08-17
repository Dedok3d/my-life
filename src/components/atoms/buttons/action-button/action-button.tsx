import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const [hoverAnim] = [
    {
        '0%': {
            backgroundColor: 'rgb(255,255,255)',
        },
        '100%': {
            backgroundColor: 'rgb(215,215,215)',
        }
    },
];

const styles = StyleSheet.create({
    button: {
        border: '1px solid rgb(255,255,255)',
        color: 'rgb(255,255,255)',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '120px',
        height: '40px',
    }
});

interface Props {
    onClick?: () => void;
    children?: React.ReactNode;
}

function ActionButton({ children, onClick }: Props) {

    return (
        <div onClick={onClick} className={css(styles.button)}>
            {children}
        </div>
    );
}

export default ActionButton;
