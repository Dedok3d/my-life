import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    panel: {
        width: '250px',
        margin: '10px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'rgb(245,245,245)',
        boxShadow: '0 0 5px rgb(51, 51, 51)',
    },
});

interface Props {
    children: React.ReactNode;
}

function OptionCard({ children }: Props) {

    return (
        <div className={css(styles.panel)}>
            {children}
        </div>
    );
}

export default OptionCard;
