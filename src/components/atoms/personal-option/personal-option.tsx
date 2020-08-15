import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';
import { changeFirstName, changeBirthDate } from '../../../store/actions';

const styles = StyleSheet.create({
    label: {
        display: 'flex',
        justifyContent: 'inherit',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '3px',
    },
    input: {
        margin: '3px 3px 3px 10px',
        width: '150px',
    },
    datepicker: {
        padding: '1px 2px',
        height: '30px',
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: '20px',
        width: '100%',
        height: '30px',
        backgroundImage: 'linear-gradient(262deg,rgb(51, 51, 51),rgb(0, 0, 0))',
        color: 'rgb(255,255,255)',
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100% - 30px)',
    }
});

interface RootState {
    firstName: string;
    birthDate: string;
}

const mapStateToProps = (state: RootState) => (state);

const connector = connect(
    mapStateToProps,
    { changeFirstName, changeBirthDate }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function PersonalOption({ firstName, birthDate, changeFirstName, changeBirthDate }: Props) {

    return (
        <Fragment>
            <div className={css(styles.title)}>Личность</div>

            <div className={css(styles.content)}>

                <label className={css(styles.label)}>
                    Д.Р.
                    <input
                        className={css(styles.input, styles.datepicker)}
                        value={birthDate}
                        onChange={(e) => {
                            changeBirthDate(e.target.value);
                        }}
                        type="date"
                    />
                </label>

                <label className={css(styles.label)}>
                    Имя
                    <input
                        className={css(styles.input)}
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                            changeFirstName(e.target.value);
                        }}
                    />
                </label>
            </div>
        </Fragment>
    );
}

export default connector(PersonalOption);
