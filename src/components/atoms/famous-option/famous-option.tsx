import React, { Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect, ConnectedProps } from 'react-redux';

import { changeFamousDeath } from '../../../store/actions';
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
        padding: '5px',
        paddingLeft: '40px',
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
        height: 'calc(100% - 30px)',
        width: '250px',
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        padding: '7px 0',
        margin: '0',
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
            <div className={css(styles.title)}>Смерти знаменитостей</div>

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
