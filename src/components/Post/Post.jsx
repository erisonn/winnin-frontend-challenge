import { NavLink } from "react-router-dom";
import './Post.scss'
import { AiTwotonePushpin } from 'react-icons/ai'

const Post = (props) => {

    const { pinned, thumbnail, forum, title, date, author, mediaUrl } = props

    // Caso o post esteja fixado, irá renderizar o icone e mensagem.

    const pinnedIcon = pinned && 
        <div className="pinned">
            <AiTwotonePushpin/>
            <p>PINNED</p>
        </div>

    return ( 
        <div className="post" data-testid='post-item'>
            <div className='post-img'>
                <img src={thumbnail} alt=""/>
            </div>
            <div className='post-content'>
                <div>
                    {pinnedIcon}
                    <NavLink to={forum} className='post-forum' activeClassName='active'>{forum}</NavLink>
                </div>
                <h1 className='post-title'>{title}</h1>
                <p className='post-author'>Posted {date} by <a href="/#">{author}</a></p>
                <a href={mediaUrl} target='_blank' rel="noreferrer" className='post-media'>{mediaUrl}</a>
            </div>
        </div>
    );
}
 
export default Post;