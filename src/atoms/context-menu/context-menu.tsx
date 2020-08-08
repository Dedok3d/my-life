import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import DownArrow from '../svg/down-arrow';

const hoverAnim = {
    '0%': {
        backgroundColor: 'rgb(255,255,255)',
    },
    '100%': {
        backgroundColor: 'rgb(220,220,220)',
    }
};

const styles = StyleSheet.create({
    menu: {
        display: 'flex',
        cursor: 'pointer',
        fontSize: '17px',
    },
    dropContent: {
        backgroundColor: 'rgb(255,255,255)',
        border: '1px solid rgb(0, 0, 0)',
        borderRadius: '10px',
        color: 'rgb(0,0,0)',
        width: '150px',
        position: 'absolute',
        top: '55px',
        overflow: 'hidden',
    },
    ul: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
        lineHeight: '24px',
    },
    li: {
        padding: '10px 5px 10px 5px',
        ':hover': {
            animationName: [hoverAnim],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
    },
});

interface Props {
    options: string[];
}

function ContextMenu({ options }: Props) {
    const [showSropContent, setShow] = useState(false);
    return (
        <div className={css(styles.menu)}>
            <div onClick={() => setShow(!showSropContent)}>
                Прожито в
                <DownArrow />
            </div>
            {
                showSropContent && <div className={css(styles.dropContent)}>
                    <ul className={css(styles.ul)}>
                        {
                            options.map(option => <li className={css(styles.li)} key={option}>{option}</li>)
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default ContextMenu;
