
const Header = ({feed, setFeed}) => {

    return ( 
        <header>
            <div className="flex-wrap">
                <button className={feed === 'hot'? 'active' : ''} onClick={(() => setFeed('hot'))}>Hot</button>
                <button className={feed === 'new'? 'active' : ''} onClick={(() => setFeed('new'))}>New</button>
                <button className={feed === 'rising'? 'active' : ''} onClick={(() => setFeed('rising'))}>Rising</button>
            </div>
        </header>
    );
}
 
export default Header;