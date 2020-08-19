import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

import DownArrow from '../../svg/down-arrow';
import { RadioOption } from '../../../../models';

const [hoverAnim, hoverAnimBtn, fadeIn, fadeOut] = [

    {
        '0%': {
            backgroundColor: 'rgb(255,255,255)',
        },
        '100%': {
            backgroundColor: 'rgb(215,215,215)',
        }
    },
    {
        '100%': {
            boxShadow: '0 0 5px rgb(255,255,255)',
        }
    },
    {
        '0%': {
            opacity: 0,
            visibility: 'hidden',
            top: '65px',
        },
        '100%': {
            opacity: 1,
            visibility: 'visible',
            top: '45px',
        }
    },
    {
        '0%': {
            opacity: 1,
            visibility: 'visible',
            top: '45px',
        },
        '100%': {
            opacity: 0,
            visibility: 'hidden',
            top: '65px',
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
        position: 'relative',
    },
    button: {
        width: '120px',
        height: '40px',
        border: '1px solid rgb(255,255,255)',
        color: 'rgb(255,255,255)',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        ':hover': {
            animationName: [hoverAnimBtn],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
    },
    dropContent: {
        zIndex: 999,
        width: '250px',
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
        cursor: 'pointer',
        height: '50px',
        paddingLeft: '10px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        ':hover': {
            animationName: [hoverAnim],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
    },
});

interface Props {
    options: RadioOption[];
    changeOptions: (options: RadioOption[]) => void;
}

function SelectBox({ options, changeOptions }: Props) {
    const [showSropContent, setShow] = useState<boolean>(undefined);

    const onClick = (index: number) => {
        const newOptions = [...options];
        newOptions[index].checked = !newOptions[index].checked;
        changeOptions(newOptions);
    }

    return (
        <div className={css(styles.menu)}>

            <div className={css(styles.button)} onClick={() => setShow(!showSropContent)}>
                Ещё
                <DownArrow color={'rgb(255,255,255)'} />
            </div>

            {
                showSropContent !== undefined &&
                <div className={css(styles.dropContent, showSropContent ? styles.animFadeIn : styles.animFadeOut)}>
                    <ul className={css(styles.ul)}>
                        {
                            options.map((option, index) =>
                                <li
                                    key={option.name}
                                    className={css(styles.li)}
                                    onClick={() => { onClick(index); }}
                                >
                                    {option.name}
                                    {option.checked && <DownArrow color={'rgb(0,0,0)'} />}
                                </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default SelectBox;
