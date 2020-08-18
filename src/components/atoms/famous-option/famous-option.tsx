import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import { changeFamousDeath } from '../../../store/actions';
import { RootState } from '../../../store/reducers';
import DownArrow from '../svg/down-arrow';

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


const mapStateToProps = ({ famousDeath }: RootState) => ({ famousDeath });

const connector = connect(
    mapStateToProps,
    { changeFamousDeath }
);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux { }

function FamousOption({ famousDeath, changeFamousDeath }: Props) {

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
        <Fragment>
            <div className={css(styles.title)}>Этапы жизни</div>

            <div className={css(styles.content)}>
                {
                    famousDeath.map((celebrity, index) =>
                        <label
                            key={celebrity.name}
                            className={css(styles.label)}
                            onClick={() => updateFamousDeath(index)}
                        >
                            {`${celebrity.name} (${celebrity.death})`}
                            {celebrity.checked && <DownArrow color={'rgb(0,0,0)'} />}
                        </label>
                    )
                }
            </div>
        </Fragment>
    );
}

export default connector(FamousOption);
