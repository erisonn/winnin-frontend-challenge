import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import defaultThumbnail from '../static/defaultThumbnail.svg'
import { AiOutlineFire, AiOutlineRise } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'
import { IoNewspaperOutline } from 'react-icons/io5'


//Verifica se temos um termo de busca, caso tenha retorna  url da API de busca do reddit, caso contrário irá retornar a API padrão do reddit.

const checkRedditUrl = (searchQuery, subReddit, sortPosts) => {
    if(searchQuery) return `https://www.reddit.com/search/.json${searchQuery}`;
    return `https://www.reddit.com${subReddit}/${sortPosts}.json?limit=35`;
}

//a data de criação dos posts da API são em UNIX. essa função passa a data para algo legível.
TimeAgo.addDefaultLocale(en)
const convertUnix = (created_date) => {
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(created_date * 1000))
}

//Formata os dados do post antes de passar para os componentes.

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

//Formata os dados do Subreddit antes de passar para os componentes.

const formattedSubs = (subs) => subs && subs.map(sub => {
    return {
        'name': sub.data.display_name_prefixed,
        'to': `/${sub.data.display_name_prefixed}`
    }
})

//Verifica se estamos em um Subreddit, e retorna uma nova rota para o NavLink.

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

//Formata os dados do Subreddit.

const formattedSubredditInfo = (subRedditInfo) => {
    return {
        'img' : subRedditInfo.icon_img,
        'title': subRedditInfo.title,
        'subtitle': subRedditInfo.display_name_prefixed,
        'description':subRedditInfo.public_description,
    }
}

export { 
    checkRedditUrl, 
    formattedPosts, 
    formattedSubs, 
    checkIfSubreddit, 
    formattedSubredditInfo }
export default convertUnix;