import Age from "./Age";
import { v4 as uuidv4 } from "uuid";
import Counter from "./Counter";
import { RoomType } from "../customTypes";

interface RoomPropsType {
    idx: number;
    room: RoomType;
    onUpdateAdults: (roomIdx: number, action: "Add" | "Minus") => void;
    onUpdateChildren: (roomIdx: number, action: "Add" | "Minus") => void;
    onUpdateAges: (roomIdx: number, newAge: number, ageIdx: number) => void;
    onRemoveAge: (roomIdx: number, ageIdx: number) => void;
    onRemoveRoom: (toRemoveRoomIdx: number) => void;
}

const Room = ({
    idx,
    room,
    onUpdateAdults,
    onUpdateChildren,
    onUpdateAges,
    onRemoveAge,
    onRemoveRoom,
}: RoomPropsType) => {
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
                label={"Adults"}
                onUpdateCounter={onUpdateAdults}
                roomIdx={idx}
            />
            <Counter
                countValue={room.children}
                onUpdateCounter={onUpdateChildren}
                label={"Children"}
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
