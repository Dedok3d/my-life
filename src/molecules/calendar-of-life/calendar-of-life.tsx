import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Square from '../../atoms/square';

const styles = StyleSheet.create({
    calendar: {
    },
    item: {
        display: 'inline-block',
        padding: '3px',
    },
});

interface Props {
    numberOfSquares: number;
    completedSquares: number;
}

function CalendarOfLife({ numberOfSquares, completedSquares }: Props) {
    const squares = (() => {
        const array = [];
        for (let i = 0; i < numberOfSquares; i++) {
            array.push(<Square fill={i < completedSquares} />);
        }
        return array;
    })();

    return (
        <div className={css(styles.calendar)}>
            {squares.map((square, i) => <div key={`square-${i}`} className={css(styles.item)}>{square}</div>)}
        </div>
    );
}

export default CalendarOfLife;
