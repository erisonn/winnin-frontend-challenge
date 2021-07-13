
const Header = ({setFeed}) => {

    return ( 
        <header>
            <div className="flex-wrap">
                <button onClick={(() => setFeed('hot'))}>Hot</button>
                <button onClick={(() => setFeed('new'))}>New</button>
                <button onClick={(() => setFeed('rising'))}>Rising</button>
            </div>
        </header>
    );
}
 
export default Header;