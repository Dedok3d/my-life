import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import { LifeIternal } from '../../../models';
import { changeLifeIternals } from '../../../store/actions';

const styles = StyleSheet.create({
    label: {
        width: '150px',
        padding: '3px',
        cursor: 'pointer'
    },
    input: {
        verticalAling: 'middle',
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
    lifeIternals: LifeIternal[];
}

const mapStateToProps = ({ lifeIternals }: RootState) => ({
    lifeIternals
});

const connector = connect(
    mapStateToProps,
    { changeLifeIternals }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function IternalOption({ lifeIternals, changeLifeIternals }: Props) {

    const updateIternals = (index: number, checked: boolean) => {
        const its = [...lifeIternals];
        its[index].checked = checked;
        changeLifeIternals(its);
    };

    return (
        <Fragment>
            <div className={css(styles.title)}>Этапы жизни</div>

            <div className={css(styles.content)}>
                {
                    lifeIternals.map((iternal, index) =>
                        <label key={iternal.name} className={css(styles.label)}>
                            <input
                                className={css(styles.input)}
                                type="checkbox"
                                checked={iternal.checked}
                                onChange={(e) => updateIternals(index, e.target.checked)}
                            />
                            {iternal.name}
                        </label>
                    )
                }
            </div>
        </Fragment>
    );
}

export default connector(IternalOption);
