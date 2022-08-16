const Counter = ({ onUpdateCounter, label, roomIdx, countValue }) => {
    return (
        <div className="counter d-flex">
            <span className="counter__label">{label}</span>
            <div className="counter__btns">
                <button
                    className="counter__btn"
                    onClick={() => onUpdateCounter(roomIdx, "Minus")}
                >
                    <i className="fa-solid fa-minus"></i>
                </button>
                <span>{`${countValue}`}</span>
                <button
                    className="counter__btn"
                    onClick={() => onUpdateCounter(roomIdx, "Add")}
                >
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
};

export default Counter;
