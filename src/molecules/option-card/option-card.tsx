import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    panel: {
        width: '250px',
        height: '250px',
        backgroundColor: 'rgba(153, 120, 229, 0.5)'
    },
});

interface Props {
}


function OptionCard({ }: Props) {

    return (
        <div className={css(styles.panel)}>

        </div>
    );
}

export default OptionCard;
