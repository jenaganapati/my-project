import React from 'react';
import { connect } from 'react-redux';
const LeftPanel = ({ dispatch, count }) => {
    const onIncreaseBtnClick = () => {
        dispatch({
            type: "I"
        })
    }
    const onDecreaseBtnClick = () => {
        dispatch({
            type: "D"
        })
    }
    return <div>
        1st Panel
        <button
            onClick={onIncreaseBtnClick}
        >
            Increase
        </button>
        <span>
            {count}
        </span>
        <button
            onClick={onDecreaseBtnClick}
        >
            Decrease
        </button>
    </div>
}
const mapStateToProps = state => ({
    count: state.count
})
export default connect(mapStateToProps)(LeftPanel);