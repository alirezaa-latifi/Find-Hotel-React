import { useEffect, useRef, useState } from "react";

const Counter = ({ countValue, onCounterUpdate, label }) => {
    const [count, setCount] = useState(countValue);

    const handleAdd = () => {
        setCount(count + 1);
    };
    const handleMinus = () => {
        count > 0 && setCount(count - 1);
    };

    useEffect(() => console.log("counter Mounted"), []);

    // useEffect(() => {
    //     onCounterUpdate(count);
    // }, [count]);

    console.log("counterrr re-renderd");

    return (
        <div className="counter d-flex">
            <span className="counter__label">{label}</span>
            <div className="counter__btns">
                <button className="counter__btn" onClick={handleMinus}>
                    <i className="fa-solid fa-minus"></i>
                </button>
                <span>{count}</span>
                <button className="counter__btn" onClick={handleAdd}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default Counter;
