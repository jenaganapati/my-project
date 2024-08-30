import React, { useState } from 'react';
const ProblemStmt = () => {
    const [counter, setCounter] = useState(0);
    const increaseFn = () => {
        const cnt = counter + 1;
        setCounter(cnt);
    }
    const decreaseFn = () => {
        const cnt = counter - 1;
        setCounter(cnt);
    }
    return (
        <div className="App">
            <div>
                <div className="App">
                    <h1>Counter Demo {counter}</h1>
                </div>

                <div style={{ display: "inline-block", width: 200 }}>
                    Section 1
                    <div>
                        <button onClick={increaseFn}>Increase</button>
                        <button onClick={decreaseFn}>Decrease</button>
                    </div>
                </div>
                {counter > 0 &&
                    <div style={{ display: "inline-block", width: 200 }}>
                        Section 2
                        <div>
                            <button onClick={increaseFn}>Increase</button>
                            <button onClick={decreaseFn}>Decrease</button>
                        </div>
                    </div>
                }

            </div>

        </div>
    );
}

export default ProblemStmt;