import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    square: {
        width: '20px',
        height: '20px',
        border: '1px solid rgb(0,0,0)'
    },
});

interface Props {
    options: string[];
    name: string;
}

function RadioButton({ options, name }: Props) {

    return (
        <div>
            {
                options.map((option, i) =>
                    <div key={i}>
                        <input type="radio" name={name} value={option} />
                        <label >{option}</label>
                    </div >
                )
            }

        </div>
    );
}

export default RadioButton;
