import React from "react";
import { connect } from "react-redux";
const reset = () => {
    return {
        type: "R"
    }
}
const BottomPanel = ({ reset }) => {
    return <div>
        <button
            onClick={reset}
        >
            Reset
        </button>
    </div>
}

const mapDispachToProps = {
    reset
}
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, mapDispachToProps)(BottomPanel);