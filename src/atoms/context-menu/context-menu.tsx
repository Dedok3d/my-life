import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import DownArrow from '../svg/down-arrow';

const [hoverAnim, fadeIn, fadeOut] = [
    {
        '0%': {
            backgroundColor: 'rgb(255,255,255)',
        },
        '100%': {
            backgroundColor: 'rgb(220,220,220)',
        }
    },
    {
        '0%': {
            opacity: 0,
            top: '75px',
        },
        '100%': {
            opacity: 1,
            top: '55px',
        }
    },
    {
        '0%': {
            opacity: 1,
            top: '55px',
        },
        '100%': {
            opacity: 0,
            top: '75px',
        }
    },
];

const styles = StyleSheet.create({
    animFadeIn: {
        animationName: [fadeIn],
        animationDuration: '.5s',
        animationIterationCount: 1,
        animationFillMode: 'forwards'
    },
    animFadeOut: {
        animationName: [fadeOut],
        animationDuration: '.5s',
        animationIterationCount: 1,
        animationFillMode: 'forwards'
    },
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
                <div className={css(styles.dropContent, showSropContent ? styles.animFadeIn : styles.animFadeOut)}>
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
