import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';
import { changeFirstName, changeBirthDate, changeShowMe } from '../../../store/actions';
import { RootState } from '../../../store/reducers';
import DownArrow from '../svg/down-arrow';

const [hoverAnim] = [
    {
        '100%': {
            textShadow: 'rgb(255,215,0) 1px 0 10px',
        }
    },
];

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
        height: 'calc(100% - 30px)',
    },
    checkbox: {
        padding: '5px 5px 15px 70px',
        display: 'flex',
        flexDirection: 'row',
        cursor: 'pointer',
        ':hover': {
            animationName: [hoverAnim],
            animationDuration: '0.2s',
            animationIterationCount: 1,
            animationFillMode: 'forwards'
        },
    },
});


const mapStateToProps = ({ firstName, birthDate, showMe }: RootState) => (
    {
        firstName,
        birthDate,
        showMe,
    });

const connector = connect(
    mapStateToProps,
    { changeFirstName, changeBirthDate, changeShowMe }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function PersonalOption({ firstName, birthDate, showMe, changeFirstName, changeBirthDate, changeShowMe }: Props) {

    return (
        <Fragment>
            <div className={css(styles.title)}>Личность</div>

            <div className={css(styles.content)}>

                <label className={css(styles.label)}>
                    Д.Р.
                    <input
                        className={css(styles.input, styles.datepicker)}
                        value={birthDate || ''}
                        onChange={(e) => changeBirthDate(e.target.value)}
                        type="date"
                    />
                </label>

                <label className={css(styles.label)}>
                    Имя
                    <input
                        className={css(styles.input)}
                        type="text"
                        value={firstName}
                        onChange={(e) => changeFirstName(e.target.value)}
                    />
                </label>

                <label className={css(styles.checkbox)} onClick={() => changeShowMe(!showMe)}>
                    Показать меня
                    {showMe && <DownArrow color={'rgb(0,0,0)'} />}
                </label>
            </div>
        </Fragment>
    );
}

export default connector(PersonalOption);
