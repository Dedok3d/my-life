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
}

function RadioButton({ }: Props) {

    return (
        <div>
            <div>
                <input type="radio" />
                <label >Huey</label>
            </div>
        </div>
    );
}

export default RadioButton;
