const AddRoom = ({ onAddRoom }) => {
    return (
        <button className="add-room" onClick={onAddRoom}>
            <i className="fa-solid fa-plus"></i>Add Room
        </button>
    );
};

export default AddRoom;
