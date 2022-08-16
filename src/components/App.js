import Header from "./Header";
import Room from "./Room";
import AddRoom from "./AddRoom";
import Search from "./Search";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
    const [rooms, setRooms] = useState([{ adults: 1, children: 0 }]);

    const onAddRoom = () => {
        setRooms([...rooms, { adults: 1, children: 0 }]);
    };

    const onUpdateRooms = (adults, children, idx) => {
        const tempRooms = rooms.map((room) => ({ ...room }));
        const result = [
            ...tempRooms.slice(0, idx),
            { adults, children },
            ...tempRooms.slice(idx + 1),
        ];
        setRooms(result);
    };

    const onRemoveRoom = (toRemoveRoomIdx) => {
        setRooms(rooms.filter((_, idx) => idx !== toRemoveRoomIdx));
    };

    const calcGuestCount = (rooms) => {
        return rooms.reduce(
            (sum, currRoomObj) =>
                sum + currRoomObj.adults + currRoomObj.children,
            0
        );
    };

    console.log("App re-renderd");

    return (
        <div className="app">
            <Header />
            <div className="container">
                {rooms.map((room, idx) => (
                    <Room
                        room={room}
                        onUpdateRooms={onUpdateRooms}
                        onRemoveRoom={onRemoveRoom}
                        roomNumber={idx + 1}
                        key={uuidv4()}
                    />
                ))}
                <AddRoom onAddRoom={onAddRoom} />
                <Search
                    roomCount={rooms.length}
                    guestCount={calcGuestCount(rooms)}
                />
            </div>
        </div>
    );
}

export default App;
