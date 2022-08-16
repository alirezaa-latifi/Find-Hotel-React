import Header from "./Header";
import Room from "./Room";
import AddRoom from "./AddRoom";
import Search from "./Search";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const deepCopyRooms = (rooms) => {
    return rooms.map((room) => ({
        adults: room.adults,
        children: room.children,
        childrenAges: room.childrenAges,
    }));
};

function App() {
    const [rooms, setRooms] = useState([
        { adults: 1, children: 0, childrenAges: [] },
    ]);

    // Add Room
    const onAddRoom = () => {
        if (rooms.length >= 8) {
            alert("Up to eight rooms can be added.");
            return;
        }
        setRooms([...rooms, { adults: 1, children: 0, childrenAges: [] }]);
    };

    // Update Room : Adults
    const onUpdateAdults = (roomIdx, action) => {
        const currentRoom = rooms[roomIdx];
        const newRooms = deepCopyRooms(rooms);

        if (action === "Add") {
            currentRoom.adults + currentRoom.children < 5
                ? newRooms[roomIdx].adults++
                : alert("Up to five guests can be added.");
        } else {
            currentRoom.adults > 1
                ? newRooms[roomIdx].adults--
                : alert("Atleast one adult per room is needed.");
        }

        setRooms(newRooms);
    };

    // Update Room : Children
    const onUpdateChildren = (roomIdx, action) => {
        const currentRoom = rooms[roomIdx];
        const newRooms = deepCopyRooms(rooms);

        if (action === "Add") {
            if (currentRoom.children + currentRoom.adults >= 5) {
                alert("Up to five guests can be added.");
                return;
            }
            if (currentRoom.children >= 3) {
                alert("Up to three children can be added.");
                return;
            }
            newRooms[roomIdx].children++;
            newRooms[roomIdx].childrenAges.push(0);
        } else if (currentRoom.children > 0) {
            newRooms[roomIdx].children--;
            newRooms[roomIdx].childrenAges = newRooms[
                roomIdx
            ].childrenAges.slice(0, -1);
        }
        setRooms(newRooms);
    };

    // Update Room : Children Ages
    const onUpdateAges = (roomIdx, newAge, ageIdx) => {
        const newRooms = deepCopyRooms(rooms);
        newRooms[roomIdx].childrenAges[ageIdx] = newAge;
        setRooms(newRooms);
    };

    // Remove Age
    const onRemoveAge = (roomIdx, ageIdx) => {
        const newRooms = deepCopyRooms(rooms);
        newRooms[roomIdx].children--;
        newRooms[roomIdx].childrenAges = newRooms[roomIdx].childrenAges.filter(
            (_, idx) => idx !== ageIdx
        );
        setRooms(newRooms);
    };

    // Remove Room
    const onRemoveRoom = (toRemoveRoomIdx) => {
        setRooms(rooms.filter((_, idx) => idx !== toRemoveRoomIdx));
    };

    // Reset Rooms
    const onResetRooms = () => {
        setRooms([{ adults: 1, children: 0, childrenAges: [] }]);
    };

    return (
        <div className="app">
            <Header onResetRooms={onResetRooms} />
            <div className="container">
                {rooms.map((room, idx) => (
                    <Room
                        idx={idx}
                        room={room}
                        onUpdateAdults={onUpdateAdults}
                        onUpdateChildren={onUpdateChildren}
                        onUpdateAges={onUpdateAges}
                        onRemoveRoom={onRemoveRoom}
                        onRemoveAge={onRemoveAge}
                        key={uuidv4()}
                    />
                ))}
                <AddRoom onAddRoom={onAddRoom} />
                <Search rooms={rooms} />
            </div>
        </div>
    );
}

export default App;
