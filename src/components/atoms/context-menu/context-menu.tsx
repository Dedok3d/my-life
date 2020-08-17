import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';
import DownArrow from '../svg/down-arrow';

const [hoverAnim, fadeIn, fadeOut] = [
    {
        '0%': {
            backgroundColor: 'rgb(255,255,255)',
        },
        '100%': {
            backgroundColor: 'rgb(215,215,215)',
        }
    },
    {
        '0%': {
            opacity: 0,
            visibility: 'hidden',
            top: '75px',
        },
        '100%': {
            opacity: 1,
            visibility: 'visible',
            top: '55px',
        }
    },
    {
        '0%': {
            opacity: 1,
            visibility: 'visible',
            top: '55px',
        },
        '100%': {
            opacity: 0,
            visibility: 'hidden',
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
        position: 'absolute',
        overflow: 'hidden',
    },
    ul: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 0',
        margin: '0',
    },
    li: {
        padding: '10px 15px 10px 15px',
        ':hover': {
            animationName: [hoverAnim],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
    },
    count: {
        textAlign: 'center',
        padding: '5px'
    },
});

interface Props {
    options: string[];
    seletedOption: string;
    onSelect: (option: string) => void;
    lifeCount: string;
}

function ContextMenu({ seletedOption, options, lifeCount, onSelect }: Props) {
    const [showSropContent, setShow] = useState<boolean>(undefined);

    const onClickHandler = () => {
        if (showSropContent) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', onClickHandler);
        return () => document.removeEventListener('click', onClickHandler);
    }, [showSropContent])

    return (
        <div className={css(styles.menu)}>

            <div onClick={() => setShow(!showSropContent)}>
                Прожито {` ${seletedOption.toLocaleLowerCase()}`}
                <DownArrow color={'rgb(255,255,255)'} />
                <div className={css(styles.count)}>{lifeCount}</div>
            </div>

            {
                showSropContent !== undefined && <div className={css(styles.dropContent, showSropContent ? styles.animFadeIn : styles.animFadeOut)}>
                    <ul className={css(styles.ul)}>
                        {
                            options.map(option =>
                                <li
                                    onClick={() => { onSelect(option); setShow(false); }}
                                    className={css(styles.li)}
                                    key={option}
                                >
                                    {option}
                                    {option === seletedOption ? <DownArrow color={'rgb(0,0,0)'} /> : undefined}
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default ContextMenu;
