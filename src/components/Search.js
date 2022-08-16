const Search = ({ roomCount, guestCount }) => {
    return (
        <button className="search">
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
            Search <span>{roomCount} Rooms</span>{" "}
            <i className="fa-solid fa-circle"></i>
            <span>{guestCount} Guests</span>
        </button>
    );
};

export default Search;
