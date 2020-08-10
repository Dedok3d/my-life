import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    panel: {
        width: '250px',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'rgb(245,245,245)',
        boxShadow: '0 0 5px rgb(51, 51, 51)',
    },
    label: {
        width: '150px',
        padding: '3px',
    },
    input: {
        verticalAling: 'middle',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '20px',
        width: '100%',
        height: '30px',
        backgroundImage: 'linear-gradient(262deg,rgb(51, 51, 51),rgb(0, 0, 0))',
        color: 'rgb(255,255,255)',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100% - 30px)',
    }
});

interface Props {
}


function OptionCard({ }: Props) {

    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.title)}>Этапы жизни</div>

            <div className={css(styles.content)}>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Текущий возраст</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Начальная школа</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Средняя школа</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Старшая школа</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Бакалавриат</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Магистратура</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Карьера</label>
                <label className={css(styles.label)}><input className={css(styles.input)} type="checkbox" />Пенсия</label>
            </div>

        </div>
    );
}

export default OptionCard;
