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
    name: string;
}

function RadioButton({ options, name }: Props) {
    const [selected, select] = useState(options[0]);

    return (
        <div className={css(styles.panel)}>
            {
                options.map((option, i) =>
                    <div
                        className={css(styles.radio)}
                        style={
                            selected === option ?
                                {
                                    color: 'rgb(53, 120, 229)',
                                    borderBottom: '4px solid rgb(53, 120, 229)'
                                }
                                : undefined
                        }
                        key={i}
                        onClick={() => select(option)}
                    >
                        {option}
                    </div >
                )
            }

        </div>
    );
}

export default RadioButton;
