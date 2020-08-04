import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    radio: {
        display: 'inline-block',
        fontSize: '28px',
        width: '33%',
        textAlign: 'center',
        cursor: 'pointer',
        height: '50px',
    },
    panel: {
    },
});

interface Props {
    options: string[];
    defaultValue: string;
    onSelect: (option: string) => void;
}

function RadioButton({ options, defaultValue, onSelect }: Props) {
    return (
        <div className={css(styles.panel)}>
            {
                options.map((option, i) =>
                    <div
                        className={css(styles.radio)}
                        style={
                            defaultValue === option ?
                                {
                                    color: 'rgb(53, 120, 229)',
                                    borderBottom: '4px solid rgb(53, 120, 229)'
                                }
                                : undefined
                        }
                        key={i}
                        onClick={() => onSelect(option)}
                    >
                        {option}
                    </div >
                )
            }

        </div>
    );
}

export default RadioButton;
