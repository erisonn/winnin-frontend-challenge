import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import defaultThumbnail from './defaultThumbnail.svg'
import { AiOutlineFire, AiOutlineRise } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import { IoNewspaperOutline } from 'react-icons/io5'

TimeAgo.addDefaultLocale(en)
//a data de criação dos posts da API são em UNIX. essa função passa a data para algo legível.
const convertUnix = (created_date) => {
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(created_date * 1000))
}

const formattedPosts = (data) => data.map(post => {
    return {
        'title': post.data.title,
        'mediaurl': post.data.url,
        'thumbnail': 
            post.data.thumbnail !== 'self' &&
            post.data.thumbnail !== 'default' &&
            post.data.thumbnail !== '' &&
            post.data.thumbnail !== 'nsfw' ? post.data.thumbnail : defaultThumbnail,
        'author': post.data.author,
        'forum': `/${post.data.subreddit_name_prefixed}`,
        'date': convertUnix(post.data.created_utc),
        'id': post.data.name,
        'pinned': post.data.stickied
    }
})

const formattedSubs = (subs) => subs && subs.map(sub => {
    return {
        'name': sub.data.display_name_prefixed,
        'to': `/${sub.data.display_name_prefixed}`
    }
})

const checkIfSubreddit = (sub) => {

    if(sub) {
        return [
            {
            'name': 'Hot', 
            'icon': <AiOutlineFire/>, 
            'to': `/r/${sub}/hot/`
            },
            {
            'name': 'New', 
            'icon': <IoNewspaperOutline/>,  
            'to': `/r/${sub}/new/`
            },
            {
            'name': 'Top', 
            'icon': <GoGraph/>, 
            'to': `/r/${sub}/top/`
            },
            {
            'name': 'Rising', 
            'icon': <AiOutlineRise/>, 
            'to': `/r/${sub}/rising/`
            }
        ]
    }
    return [
        {
        'name': 'Hot', 
        'icon': <AiOutlineFire/>, 
        'to': '/hot/'
        },
        {
        'name': 'New', 
        'icon': <IoNewspaperOutline/>, 
        'to': '/new/'
        },
        {
        'name': 'Top',
        'icon': <GoGraph/>, 
        'to': '/top/'
        },
        {
        'name': 'Rising',
        'icon': <AiOutlineRise/>,
        'to': '/rising/'
        }
    ]
}

export { formattedPosts, formattedSubs, checkIfSubreddit }
export default convertUnix;