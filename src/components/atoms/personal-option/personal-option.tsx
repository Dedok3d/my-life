import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';
import { changeFirstName } from '../../../store/actions';

const styles = StyleSheet.create({
    label: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '150px',
        padding: '3px',
    },
    input: {
        margin: '10px',
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
}

const mapStateToProps = ({ firstName }: RootState) => ({
    firstName,
});

const connector = connect(
    mapStateToProps,
    { changeFirstName }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function PersonalOption({ firstName, changeFirstName }: Props) {

    return (
        <Fragment>
            <div className={css(styles.title)}>Личность</div>

            <div className={css(styles.content)}>
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
