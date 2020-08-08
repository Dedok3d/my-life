import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';

import ContextMenu from '../../atoms/context-menu';

const styles = StyleSheet.create({
    panel: {
        position: 'relative',
        border: '1px solid rgb(0,0,0)',
        height: '100px',
        margin: '50px 100px 50px 100px',
        backgroundImage: 'linear-gradient(262deg,rgb(51, 51, 51),rgb(0, 0, 0))',
        borderRadius: '6px',
        color: 'rgb(255,255,255)',
        display: 'flex',
    },
    title: {
        fontSize: '24px',
        margin: '25px',
    },
    meta: {
        position: 'absolute',
        right: '0',
        top: '0',
        display: 'flex',
        fontSize: '15px',
    },
    context: {
        width: '190px',
        margin: '28px',
    },
    datepicker: {
        margin: '25px',
        height: '30px',
    }
});

interface Props {
    date: string;
    onSelectDate: (date: string) => void;
}

const intervals = ['Дней', 'Месяцев', 'Лет'];

function OptionsPanel({ date, onSelectDate }: Props) {
    const [interval, setInterval] = useState('');
    const [lifeCount, setLifeCount] = useState('');

    const onSelect = (option: string) => {
        setInterval(option);
        setLifeCount(calculateLifeCount(option));
    };

    const calculateLifeCount = (interval: string) => {
        if (!moment(date).isValid()) {
            return '';
        }

        const dBidth = moment(date);
        const dNow = moment();

        if (interval === intervals[0]) {
            return `${dNow.diff(dBidth, 'days')}`;
        }

        if (interval === intervals[1]) {
            return `${dNow.diff(dBidth, 'months')}`;
        }

        if (interval === intervals[2]) {
            return `${dNow.diff(dBidth, 'years')}`;
        }
    };

    useEffect(() => onSelect(interval || intervals[0]), [date]);


    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.title)}>Календарь жизни</div>

            <input
                className={css(styles.datepicker)}
                onChange={(e) => onSelectDate(e.target.value)}
                type="date"
            />

            <div className={css(styles.meta)}>
                <div className={css(styles.context)}>
                    <ContextMenu
                        lifeCount={lifeCount}
                        seletedOption={interval}
                        onSelect={onSelect}
                        options={intervals}
                    />
                </div>
            </div>
        </div>
    );
}

export default OptionsPanel;
