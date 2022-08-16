interface CounterPropsType {
    onUpdateCounter: (roomIdx: number, action: "Add" | "Minus") => void;
    label: "Adults" | "Children";
    roomIdx: number;
    countValue: number;
}

const Counter = ({
    onUpdateCounter,
    label,
    roomIdx,
    countValue,
}: CounterPropsType) => {
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
