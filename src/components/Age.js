import { v4 as uuidv4 } from "uuid";

const Age = ({ roomIdx, ageIdx, onUpdateAges, ageValue, onRemoveAge }) => {
    const ageOptions = ((maxAge) => {
        const arr = [];
        for (let i = 1; i <= maxAge; i++) {
            arr.push(i);
        }
        return arr;
    })(10);

    return (
        <div className="age">
            <span>Child {ageIdx + 1} Age</span>
            <div className="age__btns">
                <select
                    className="age"
                    name="age"
                    id="age1"
                    defaultValue={ageValue}
                >
                    <option
                        value={0}
                        onClick={() => onUpdateAges(roomIdx, 0, ageIdx)}
                    >
                        age
                    </option>
                    {ageOptions.map((ageOption) => {
                        return (
                            <option
                                value={ageOption}
                                key={uuidv4()}
                                onClick={() =>
                                    onUpdateAges(roomIdx, ageOption, ageIdx)
                                }
                            >
                                {ageOption}
                            </option>
                        );
                    })}
                </select>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <i
                className="fa-solid fa-xmark fa-xl"
                onClick={() => onRemoveAge(roomIdx, ageIdx)}
            ></i>
        </div>
    );
};

export default Age;
