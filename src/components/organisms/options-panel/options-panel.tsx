import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import IternalOption from '../../atoms/iternal-option';
import PersonalOption from '../../atoms/personal-option';
import OptionCard from '../../molecules/option-card';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
});

interface Props {
}

function OptionsPanel({ }: Props) {
    return (
        <div className={css(styles.panel)}>
            <OptionCard>
                <PersonalOption />
            </OptionCard>

            <OptionCard>
                <IternalOption />
            </OptionCard>
        </div>
    );
}

export default OptionsPanel;
