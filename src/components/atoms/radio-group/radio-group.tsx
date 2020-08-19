import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';

import DownArrow from '../svg/down-arrow';
import { RadioOption } from '../../../models';

const [hoverAnim] = [
    {
        '100%': {
            textShadow: 'rgb(255,215,0) 1px 0 10px',
        }
    },
];

const styles = StyleSheet.create({
    label: {
        padding: '5px',
        paddingLeft: '25px',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        ':hover': {
            animationName: [hoverAnim],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
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
        height: 'calc(100% - 30px)',
        width: '250px',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 0',
        margin: '0',
    }
});

interface Props {
    title: string;
    radioOption: RadioOption[];
    changeRadioOption: (index: number) => void;
}

function RadioGroup({ title, radioOption, changeRadioOption }: Props) {

    return (
        <Fragment>
            <div className={css(styles.title)}>{title}</div>

            <div className={css(styles.content)}>
                {
                    radioOption.map((option, index) =>
                        <label
                            key={option.name}
                            className={css(styles.label)}
                            onClick={() => changeRadioOption(index)}
                        >
                            {option.name}
                            {option.checked && <DownArrow color={'rgb(0,0,0)'} />}
                        </label>
                    )
                }
            </div>
        </Fragment>
    );
}

export default RadioGroup;
