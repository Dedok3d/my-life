import React, { useMemo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import IternalOption from '../../atoms/iternal-option';
import PersonalOption from '../../atoms/personal-option';
import RadioGroup from '../../atoms/radio-group';

import OptionCard from '../../molecules/option-card';
import { RootState } from '../../../store/reducers';
import { RadioOption, OptionName, FamousDeath, LifeEvent } from '../../../models';
import { changeFamousDeath, changeEvents } from '../../../store/actions';


const styles = StyleSheet.create({
    panel: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
    },
});

const mapStateToProps = ({ options, famousDeaths, lifeEvents }: RootState) => ({ options, lifeEvents, famousDeaths });

const connector = connect(
    mapStateToProps,
    { changeFamousDeath, changeEvents }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function OptionsPanel({ options, famousDeaths, lifeEvents, changeFamousDeath, changeEvents }: Props) {

    const [person, stageOfLife, famousDeath, lifeEvent] = [
        options.find(option => option.name === OptionName.Person),
        options.find(option => option.name === OptionName.StageOfLife),
        options.find(option => option.name === OptionName.FamousDeaths),
        options.find(option => option.name === OptionName.LifeEvents)
    ];

    const deaths = useMemo(() => (famousDeaths.map(celebrity => {
        const newFamousDeath = { ...celebrity };
        newFamousDeath.name = `${celebrity.name} (${celebrity.death})`;
        return newFamousDeath;
    })), [famousDeaths]);

    const events = useMemo(() => (lifeEvents.map(event => {
        const newEvent = { ...event };
        newEvent.name = `${event.name} (${event.age})`;
        return newEvent;
    })), [lifeEvents]);

    const updateRadio = (
        index: number,
        its: RadioOption[]
    ) => {
        if (its[index].checked) {
            its[index].checked = false;
            return its;
        }

        const checkedIndex = its.findIndex(celebrity => celebrity.checked);
        if (checkedIndex !== -1) {
            its[checkedIndex].checked = false;
        }

        its[index].checked = true;
        return its;
    };

    const updateEvents = (index: number) => {
        changeEvents(updateRadio(index, [...lifeEvents]) as LifeEvent[]);
    };

    const updateFamous = (index: number) => {
        changeFamousDeath(updateRadio(index, [...famousDeaths]) as FamousDeath[]);
    };

    return (
        <div className={css(styles.panel)}>
            {
                person && person.checked && <OptionCard>
                    <PersonalOption />
                </OptionCard>
            }

            {
                lifeEvent && lifeEvent.checked && <OptionCard>
                    <RadioGroup
                        title={lifeEvent.name}
                        radioOption={lifeEvents}
                        changeRadioOption={updateEvents}
                    />
                </OptionCard>
            }

            {
                famousDeath && famousDeath.checked && <OptionCard>
                    <RadioGroup
                        title={famousDeath.name}
                        radioOption={deaths}
                        changeRadioOption={updateFamous}
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
