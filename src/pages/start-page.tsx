import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    main: {
    },
});

function StartPage() {
    return (
        <div className={css(styles.main)}>
            Hello world!
        </div>
    );
}

export default StartPage;
