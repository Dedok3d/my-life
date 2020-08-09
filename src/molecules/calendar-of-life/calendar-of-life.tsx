import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Square from '../../atoms/square';

const ITEM_HEIGHT = 40;
const VIEWPORT_HEIGHT = 400;
const NUM_VISIBLE_ITEMS = Math.trunc(VIEWPORT_HEIGHT / ITEM_HEIGHT);

const styles = StyleSheet.create({
    item: {
        display: 'flex',
        heigth: '30px',
        position: 'absolute',
        margin: '10px',
    },
    viewport: {
        position: 'relative',
        width: '100%',
        height: `${VIEWPORT_HEIGHT}px`,
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
    const ref = useRef<HTMLDivElement>();
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(Math.trunc(VIEWPORT_HEIGHT / ITEM_HEIGHT));
    const [squares, setSquares] = useState<number[][]>([]);

    const calculateSquares = () => {
        const array = [];
        // divide by 2 because LifeStatistics width is '50%'
        const numItemsOnLine = Math.trunc((window.innerWidth / 2) / ITEM_HEIGHT);

        for (let i = 0; i < numberOfSquares; i += numItemsOnLine) {
            const tmp = [];
            for (let j = 0; (j < numItemsOnLine && j + i < numberOfSquares); j++) {
                tmp.push(j + i);
            }

            array.push(tmp);
        }

        setSquares(array);
    };

    useEffect(() => {
        calculateSquares();
    }, [numberOfSquares]);

    useEffect(() => {
        window.addEventListener('resize', calculateSquares);
        return () => window.removeEventListener('resize', calculateSquares);
    }, []);

    const renderRows = (() => {

        let result = [];
        for (let i = start; i < end + 1; i++) {
            result.push(
                <div key={`item-${i}`} className={css(styles.item)} style={{ top: i * ITEM_HEIGHT, height: ITEM_HEIGHT }}>
                    {
                        squares[i] && squares[i].map(index =>
                            <Square key={`square-${index}`} fill={index < completedSquares} num={index + 1} />
                        )
                    }
                </div>
            );
        }
        return result;
    })();

    const scollPos = () => {
        if (!ref || !ref.current) {
            return;
        }

        let currentIndx = Math.trunc(ref.current.scrollTop / ITEM_HEIGHT)
        currentIndx = currentIndx - NUM_VISIBLE_ITEMS >= squares.length ? currentIndx - NUM_VISIBLE_ITEMS : currentIndx;
        if (currentIndx !== start) {
            setStart(currentIndx);
            setEnd(currentIndx + NUM_VISIBLE_ITEMS);
        }
    }

    return (
        <div className={css(styles.viewport)} ref={ref} onScroll={scollPos}>
            <div className={css(styles.itemContainer)} style={{ height: squares.length * ITEM_HEIGHT }}>
                {renderRows}
            </div>
        </div>
    );
}

export default CalendarOfLife;
