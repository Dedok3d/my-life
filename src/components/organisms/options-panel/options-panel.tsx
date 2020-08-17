import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import IternalOption from '../../atoms/iternal-option';
import PersonalOption from '../../atoms/personal-option';
import OptionCard from '../../molecules/option-card';
import { RootState } from '../../../store/reducers';
import { connect, ConnectedProps } from 'react-redux';
import { OptionName } from '../../../models';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
});

const mapStateToProps = ({ options }: RootState) => ({ options });

const connector = connect(
    mapStateToProps,
    {}
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function OptionsPanel({ options }: Props) {
    const [person, stageOfLife] = [
        options.find(option => option.name === OptionName.Person),
        options.find(option => option.name === OptionName.StageOfLife)
    ];
    return (
        <div className={css(styles.panel)}>
            {
                person.checked && <OptionCard>
                    <PersonalOption />
                </OptionCard>
            }

            {
                stageOfLife.checked && <OptionCard>
                    <IternalOption />
                </OptionCard>
            }

        </div>
    );
}

export default connector(OptionsPanel);
