import { useEffect, useState } from "react";

const Age = ({ childNum, onAgeUpdate, ageValue }) => {
    const [age, setAge] = useState(ageValue);
    const maxAges = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //todo

    const handleSelect = (e) => {
        const { value } = e.target;
        setAge(+value);
        // e.currentTarget.setAttribute("selected"); //todo
    };

    useEffect(() => {
        onAgeUpdate(age, childNum - 1);
    }, [age]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="age">
            <span>Child {childNum} Age</span>
            <div className="age__btns">
                <select
                    onChange={handleSelect}
                    className="age"
                    name="age"
                    id="age1"
                >
                    <option value="age"></option>
                    {maxAges.map((ageItem) => {
                        return (
                            <option
                                value={ageItem}
                                // selected={age === ageItem && selected}  //todo : how to make it selected?
                            >
                                {ageItem}
                            </option>
                        );
                    })}
                </select>
                <i className="fa-solid fa-angle-down"></i>
            </div>
            <i className="fa-solid fa-xmark fa-xl"></i>
        </div>
    );
};

export default Age;
