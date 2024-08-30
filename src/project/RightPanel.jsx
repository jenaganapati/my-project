import { connect } from "react-redux";
import { increase, decrease, reset } from "./actions";
const RightPanel = ({ increase, decrease, reset, count }) => {
    return <div>
        2nd Panel
        <button
            onClick={increase}
        >
            Increase
        </button>
        <span>
            {count}
        </span>
        <button
            onClick={decrease}
        >
            Decrease
        </button>
    </div>
}
const mapStateToProps = (state) => ({
    count: state.count
})
const mapDispachToProps = {
    increase, decrease, reset
}
export default connect(mapStateToProps, mapDispachToProps)(RightPanel)