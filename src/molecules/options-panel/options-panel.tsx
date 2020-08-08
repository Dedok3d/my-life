import React from 'react';
import { StyleSheet, css } from 'aphrodite';
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
});

interface Props {
}

function OptionsPanel({ }: Props) {

    return (
        <div className={css(styles.panel)}>
            <div className={css(styles.title)}>Календарь жизни</div>

            <div className={css(styles.meta)}>
                <div className={css(styles.context)}>
                    <ContextMenu options={['Дней', 'Месяцев', 'Лет']} />
                </div>
            </div>
        </div>
    );
}

export default OptionsPanel;
