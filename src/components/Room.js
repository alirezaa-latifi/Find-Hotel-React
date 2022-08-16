import { useEffect, useState, useRef } from "react";
// import Age from "./Age";
// import { v4 as uuidv4 } from "uuid";
import Counter from "./Counter";

const Room = ({ roomNumber, onUpdateRooms, onRemoveRoom, room }) => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [isUpdated, setIsUpdated] = useState(false);
    // const [childrenAges, setChildrenAges] = useState(room.childrenAges);
    const label = {
        adults: "Adults",
        children: "Children",
    };

    const onAdultsUpdate = (adults) => {
        setAdults(adults);
        setIsUpdated(true);
    };

    const onChildrenUpdate = (children) => {
        setChildren(children);
        setIsUpdated(true);
    };

    // const onAgesUpdate = (age, idx) => {
    //     if (!childrenAges.length) {
    //         setChildrenAges([age]);
    //     } else {
    //         const tempAges = [...childrenAges];
    //         tempAges[idx] = age;
    //         setChildrenAges([tempAges]);
    //     }
    // };

    useEffect(() => setAdults(room.adults), [adults]);
    useEffect(() => setChildren(room.children), [children]);

    useEffect(() => {
        isUpdated && onUpdateRooms(adults, children, roomNumber - 1);
    }, [adults, children]); // eslint-disable-line react-hooks/exhaustive-deps

    console.log("Room re-renderd");
    // console.log("");
    return (
        <div className="room">
            <div className="room__header">
                <h2>Room {roomNumber}</h2>
                {roomNumber !== 1 && (
                    <button className="room__remove" onClick={onRemoveRoom}>
                        <i className="fa-solid fa-trash-can"></i>Remove
                    </button>
                )}
            </div>
            <Counter
                countValue={adults}
                onCounterUpdate={onAdultsUpdate}
                label={label.adults}
            />
            <Counter
                countValue={children}
                onCounterUpdate={onChildrenUpdate}
                label={label.children}
            />
            {/* {children > 0 &&
                childrenAges.map((age, idx) => (
                    <Age
                        ageValue={age}
                        onAgeUpdate={onAgesUpdate}
                        childNum={idx + 1}
                        key={uuidv4()}
                    />
                ))} */}
        </div>
    );
};

export default Room;
