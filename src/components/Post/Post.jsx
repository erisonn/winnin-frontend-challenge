import { NavLink } from "react-router-dom";
import './Post.scss'
import { AiTwotonePushpin } from 'react-icons/ai'

const Post = (props) => {

    return ( 
        <div className="post">
            <div className='post-img'>
                <img src={props.thumbnail} alt=""/>
            </div>
            <div className='post-content'>
                <div>
                    {props.pinned &&
                    <div className="pinned">
                        <AiTwotonePushpin/>
                        <p>PINNED</p>
                    </div>
                    }
                    <NavLink to={props.forum} className='post-forum' activeClassName='active'>{props.forum}</NavLink>
                </div>
                <h1 className='post-title'>{props.title}</h1>
                <p className='post-author'>Posted {props.date} by <a href="/#">{props.author}</a></p>
                <a href={props.mediaUrl} target='_blank' rel="noreferrer" className='post-media'>{props.mediaUrl}</a>
            </div>
        </div>
    );
}
 
export default Post;