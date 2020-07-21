import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Square from '../../atoms/square';

const styles = StyleSheet.create({
    calendar: {
    },
    item: {
        display: 'inline-block',
        padding: '10px',
    },
});

interface Props {
    numberOfWeeks: number;
}

function CalendarOfLife({ numberOfWeeks }: Props) {
    const squares = useMemo(() => {
        const array = [];
        for (let i = 0; i < numberOfWeeks; i++) {
            array.push(<Square />);
        }
        return array;
    }, [])

    return (
        <div className={css(styles.calendar)}>
            {squares.map(square => <div className={css(styles.item)}>{square}</div>)}
        </div>
    );
}

export default CalendarOfLife;
