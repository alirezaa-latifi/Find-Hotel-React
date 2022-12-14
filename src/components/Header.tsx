const Header = ({ onResetRooms }: { onResetRooms: () => void }) => {
    return (
        <div className="header">
            <div className="container pos-rel d-flex">
                <i
                    className="fa-solid fa-rotate fa-xl header__reset"
                    onClick={() => onResetRooms()}
                ></i>
                <h1 className="header__title">Who is staying?</h1>
            </div>
        </div>
    );
};

export default Header;
