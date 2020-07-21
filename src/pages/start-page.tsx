import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import Square from '../atoms/square';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            <Square />
        </div>
    );
}

export default StartPage;
