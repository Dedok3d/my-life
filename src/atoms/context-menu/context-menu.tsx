import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    menu: {
    },
});

interface Props {
    options: string[];
}

function ContextMenu({ }: Props) {
    return (
        <div className={css(styles.menu)}>
            Прожито
        </div>
    );
}

export default ContextMenu;
