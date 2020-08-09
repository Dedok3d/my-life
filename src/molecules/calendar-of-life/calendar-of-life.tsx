import React, { useState, useRef } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Square from '../../atoms/square';

const styles = StyleSheet.create({
    calendar: {
    },
    item: {
        display: 'flex',
        heigth: '30px',
        position: 'absolute',
        margin: '10px',
    },
    viewport: {
        position: 'relative',
        width: '100%',
        height: '400px',
        overflow: 'auto',
    },
    itemContainer: {
        position: 'absolute',
    },
});

interface Props {
    numberOfSquares: number;
    completedSquares: number;
}

function CalendarOfLife({ numberOfSquares, completedSquares }: Props) {
    const itemheight = 40;

    const ref = useRef<HTMLDivElement>();
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(Math.trunc(400 / itemheight));


    const numVisibleItems = Math.trunc(400 / itemheight);


    const squares = (() => {
        const array = [];

        for (let i = 0; i < numberOfSquares; i += 19) {
            const tmp = [];
            for (let j = 0; (j < 19 && j + i < numberOfSquares); j++) {
                tmp.push(<Square fill={(j + i) < completedSquares} num={j + i + 1} />);
            }

            array.push(tmp);
        }

        return array;
    })();

    const renderRows = (() => {
        let result = [];
        for (let i = start; i < end + 1; i++) {
            result.push(
                <div key={`square-${i}`} className={css(styles.item)} style={{ top: i * itemheight, height: itemheight }}>
                    <div style={{ display: 'flex' }}>
                        {squares[i]}
                    </div>
                </div>
            );
        }
        return result;
    })();

    const scollPos = () => {
        if (!ref || !ref.current) {
            return;
        }

        let currentIndx = Math.trunc(ref.current.scrollTop / itemheight)
        currentIndx = currentIndx - numVisibleItems >= squares.length ? currentIndx - numVisibleItems : currentIndx;
        if (currentIndx !== start) {
            console.log("Redraw");
            setStart(currentIndx);
            setEnd(currentIndx + numVisibleItems >= squares.length ? squares.length - 1 : currentIndx + numVisibleItems);
        }
    }

    return (
        <div className={css(styles.calendar)}>
            <div className={css(styles.viewport)} ref={ref} onScroll={scollPos}>
                <div className={css(styles.itemContainer)} style={{ height: squares.length * itemheight }}>
                    {renderRows}
                </div>
            </div>
        </div>
    );
}

export default CalendarOfLife;
