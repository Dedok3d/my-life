import React, { useState, useRef, useEffect, useMemo } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';


import Square from '../../atoms/square';
import { Intervals, MONTHS_OF_YAER, WEEKS_OF_MOUNTH, LEvents } from '../../../models';
import { RootState } from '../../../store/reducers';
import Death from '../../atoms/svg/death';
import Person from '../../atoms/svg/person';
import Child from '../../atoms/svg/child';
import Marriage from '../../atoms/svg/marriage';
import Business from '../../atoms/svg/business';
import Appartment from '../../atoms/svg/appartment';

const ITEM_HEIGHT = 40;
const VIEWPORT_HEIGHT = 400;
const NUM_VISIBLE_ITEMS = Math.trunc(VIEWPORT_HEIGHT / ITEM_HEIGHT);
const MAIN_WIDTH = 800;

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
        scrollbarWidth: 'thin',
        scrollbarColor: 'blue orange',
        ':-webkit-scrollbar': {
            width: '12px',
        }
    },
    itemContainer: {
        position: 'absolute',
    },
});


const mapStateToProps = ({ lifeIternals, famousDeaths, lifeEvents, showMe, birthDate }: RootState) => ({
    lifeIternals, famousDeaths, showMe, birthDate, lifeEvents,
});

const connector = connect(
    mapStateToProps,
    {}
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
    numberOfSquares: number;
    iternal: string;
}

function CalendarOfLife({ numberOfSquares, lifeIternals, iternal, famousDeaths, lifeEvents, birthDate, showMe }: Props) {
    const ref = useRef<HTMLDivElement>();
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(Math.trunc(VIEWPORT_HEIGHT / ITEM_HEIGHT));
    const [squares, setSquares] = useState<number[][]>([]);

    const multiplier = useMemo(() => {
        switch (iternal) {
            case Intervals.year:
                return 1;
            case Intervals.month:
                return MONTHS_OF_YAER;
            case Intervals.week:
                return MONTHS_OF_YAER * WEEKS_OF_MOUNTH;
            default:
                return 0;
        }
    }, [iternal]);

    const deathAge = useMemo(() => {
        const celebrity = famousDeaths.find(celebrity => celebrity.checked);
        if (celebrity) {
            return celebrity.death * multiplier;
        }
    }, [famousDeaths, multiplier]);

    const eventChecked = useMemo(() => {
        const event = lifeEvents.find(event => event.checked);
        if (event) {
            return {
                name: event.name,
                age: event.age * multiplier,
            };
        }
    }, [lifeEvents, multiplier]);

    const age = useMemo(() => {
        if (!birthDate) {
            return;
        }

        const dBidth = moment(birthDate);
        const dNow = moment();

        switch (iternal) {
            case Intervals.year:
                return dNow.diff(dBidth, 'years');
            case Intervals.month:
                return dNow.diff(dBidth, 'months');
            case Intervals.week:
                return dNow.diff(dBidth, 'days');
            default:
                return;
        }
    }, [birthDate, iternal]);

    const iternalChecked = useMemo(() => !!lifeIternals.find(iternal => iternal.checked), [lifeIternals]);

    const calculateSquares = () => {
        const array = [];
        const numItemsOnLine = Math.trunc(MAIN_WIDTH / ITEM_HEIGHT);

        for (let i = 0; i < numberOfSquares; i += numItemsOnLine) {
            const tmp = [];
            for (let j = 0; (j < numItemsOnLine && j + i < numberOfSquares); j++) {
                tmp.push(j + i);
            }

            array.push(tmp);
        }

        setSquares(array);
    };

    const getSquareColor = (index: number) => {
        for (let i = 0; i < lifeIternals.length; i++) {
            const iternal = lifeIternals[i];
            const [min, max] = [
                i > 0 ? lifeIternals[i - 1].max * multiplier + 1 : lifeIternals[i].min * multiplier,
                iternal.max * multiplier
            ];

            if (iternal.checked && min <= index && index <= max) {
                return iternal.color;
            }

        }

        if (iternalChecked) {
            return 'rgb(192,192,192)';
        }

        if (index + 1 > deathAge) {
            return 'rgb(255,255,255)';
        }

        return `rgba(33, 110, 57, ${1 - (index / numberOfSquares)})`;
    };

    useEffect(() => calculateSquares(), [numberOfSquares]);

    const getEventIcon = () => {
        const { name, age } = eventChecked;

        switch (name) {
            case LEvents.FirstMarriage:
                return <Marriage key={`svg-marriage-${age}`} />
            case LEvents.FirstChild:
                return <Child key={`svg-child-${age}`} />
            case LEvents.OwnBusiness:
                return <Business key={`svg-business-${age}`} />
            case LEvents.PurchaseOfFlat:
                return <Appartment key={`svg-appartment-${age}`} />
        }
    }

    const getIcon = (index: number) => {
        if (showMe && age === index) {
            return <Person key={`svg-age-${age}`} />;
        }

        if (eventChecked && eventChecked.age === index) {
            return getEventIcon();
        }

        if (deathAge === index) {
            return <Death key={`svg-deathAge-${deathAge}`} />;
        }

        return <Square key={`square-${index}`} fill={true} color={getSquareColor(index)} num={index + 1} />;
    }

    const renderRows = (() => {
        let result = [];
        for (let i = start; i < end; i++) {
            result.push(
                <div key={`item-${i}`} className={css(styles.item)} style={{ top: i * ITEM_HEIGHT, height: ITEM_HEIGHT }}>
                    {
                        squares[i] && squares[i].map(getIcon)
                    }
                </div>);
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

export default connector(CalendarOfLife);
