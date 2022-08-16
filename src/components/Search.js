const Search = ({ rooms }) => {
    // Calc Guest Count
    const calcGuestCount = (rooms) => {
        return rooms.reduce(
            (sum, currRoomObj) =>
                sum + currRoomObj.adults + currRoomObj.children,
            0
        );
    };

    // isAgesEntered
    const isAgesEntered = (rooms) => {
        return !rooms.some((room) =>
            room.childrenAges.some((age) => age === 0)
        );
    };

    // Generate Output Str
    const generateOutputStr = (rooms) => {
        const output = rooms.reduce(
            (output, { adults, childrenAges }, roomIdx) => {
                let roomStr = "";
                roomStr += adults;

                if (childrenAges.length > 0) {
                    roomStr += ":";
                    for (let i = 0; i < childrenAges.length; i++) {
                        roomStr +=
                            childrenAges[i] +
                            (i < childrenAges.length - 1 ? "," : "");
                    }
                }

                return (
                    output +
                    `${roomIdx === rooms.length - 1 ? roomStr : roomStr + "|"}`
                );
            },
            ""
        );
        return output;
    };

    // Commit App
    const onCommit = () => {
        if (isAgesEntered(rooms)) {
            console.log(generateOutputStr(rooms));
        } else {
            alert("Each child needs to have their age supplied.");
        }
    };

    return (
        <button className="search" onClick={() => onCommit()}>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            Search <span>{rooms.length} Rooms</span>{" "}
            <i className="fa-solid fa-circle"></i>
            <span>{calcGuestCount(rooms)} Guests</span>
        </button>
    );
};

export default Search;
