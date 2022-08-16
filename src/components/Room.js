import Age from "./Age";
import { v4 as uuidv4 } from "uuid";
import Counter from "./Counter";

const Room = ({
    idx,
    room,
    onUpdateAdults,
    onUpdateChildren,
    onUpdateAges,
    onRemoveAge,
    onRemoveRoom,
}) => {
    const labels = {
        adults: "Adults",
        children: "Children",
    };

    return (
        <div className="room">
            <div className="room__header">
                <h2>Room {idx + 1}</h2>
                {idx > 0 && (
                    <button
                        className="room__remove"
                        onClick={() => onRemoveRoom(idx)}
                    >
                        <i className="fa-solid fa-trash-can"></i>Remove
                    </button>
                )}
            </div>
            <Counter
                countValue={room.adults}
                label={labels.adults}
                onUpdateCounter={onUpdateAdults}
                roomIdx={idx}
            />
            <Counter
                countValue={room.children}
                onUpdateCounter={onUpdateChildren}
                label={labels.children}
                roomIdx={idx}
            />
            {room.children > 0 &&
                room.childrenAges.map((age, ageIdx) => (
                    <Age
                        ageValue={age}
                        onUpdateAges={onUpdateAges}
                        onRemoveAge={onRemoveAge}
                        ageIdx={ageIdx}
                        roomIdx={idx}
                        key={uuidv4()}
                    />
                ))}
        </div>
    );
};

export default Room;
