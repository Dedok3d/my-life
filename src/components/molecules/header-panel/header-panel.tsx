import React, { useState, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import moment from 'moment';

import ContextMenu from '../../atoms/context-menu';
import ActionButton from '../../atoms/buttons/action-button';

const styles = StyleSheet.create({
    panel: {
        position: 'relative',
        border: '1px solid rgb(0,0,0)',
        height: '130px',
        margin: '50px 100px 50px 100px',
        backgroundImage: 'linear-gradient(262deg,rgb(51, 51, 51),rgb(0, 0, 0))',
        borderRadius: '6px',
        color: 'rgb(255,255,255)',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '24px',
        margin: '20px',
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
    },
    actions: {
        marginLeft: '25px',
    }
});

interface RootState {
    birthDate: string;
}

const mapStateToProps = (state: RootState) => (state);

const connector = connect(
    mapStateToProps,
    {}
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

const intervals = ['Дней', 'Месяцев', 'Лет'];

function HeaderPanel({ birthDate }: Props) {
    const [interval, setInterval] = useState('');
    const [lifeCount, setLifeCount] = useState('');

    const onSelect = (option: string) => {
        setInterval(option);
        setLifeCount(calculateLifeCount(option));
    };

    const calculateLifeCount = (interval: string) => {
        if (!moment(birthDate).isValid()) {
            return '';
        }

        const dBidth = moment(birthDate);
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

    useEffect(() => onSelect(interval || intervals[0]), [birthDate]);


    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.title)}>Календарь жизни</div>
            <div className={css(styles.actions)}>
                <ActionButton>Сохранить</ActionButton>
            </div>

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

export default connector(HeaderPanel);
