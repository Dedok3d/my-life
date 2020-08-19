import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import IternalOption from '../../atoms/iternal-option';
import PersonalOption from '../../atoms/personal-option';
import RadioGroup from '../../atoms/radio-group';

import OptionCard from '../../molecules/option-card';
import { RootState } from '../../../store/reducers';
import { OptionName } from '../../../models';
import { changeFamousDeath } from '../../../store/actions';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
});

const mapStateToProps = ({ options, famousDeath }: RootState) => ({ options, famousDeath });

const connector = connect(
    mapStateToProps,
    { changeFamousDeath }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function OptionsPanel({ options, famousDeath, changeFamousDeath }: Props) {

    const [person, stageOfLife, famousDeaths] = [
        options.find(option => option.name === OptionName.Person),
        options.find(option => option.name === OptionName.StageOfLife),
        options.find(option => option.name === OptionName.FamousDeaths)
    ];

    const updateFamousDeath = (index: number) => {
        const its = [...famousDeath];

        if (its[index].checked) {
            its[index].checked = false;
            changeFamousDeath(its);
            return;
        }

        const checkedIndex = its.findIndex(celebrity => celebrity.checked);
        if (checkedIndex !== -1) {
            its[checkedIndex].checked = false;
        }

        its[index].checked = true;
        changeFamousDeath(its);
    };

    return (
        <div className={css(styles.panel)}>
            {
                person && person.checked && <OptionCard>
                    <PersonalOption />
                </OptionCard>
            }

            {
                famousDeaths && famousDeaths.checked && <OptionCard>
                    <RadioGroup
                        title={'Смерти знаменитостей'}
                        radioOption={famousDeath}
                        changeRadioOption={updateFamousDeath}
                    />
                </OptionCard>
            }

            {
                famousDeaths && stageOfLife.checked && <OptionCard>
                    <IternalOption />
                </OptionCard>
            }

        </div>
    );
}

export default connector(OptionsPanel);
