import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import defaultThumbnail from './defaultThumbnail.svg'

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
        post.data.thumbnail !== 'nsfw' ? post.data.thumbnail: defaultThumbnail,
        'author': post.data.author,
        'forum': '/' + post.data.subreddit_name_prefixed,
        'date': convertUnix(post.data.created_utc),
        'id': post.data.name,
        'pinned': post.data.stickied
    }
})

const formattedSubs = (subs) => subs.map(sub => {
    return {
        'name': sub.data.display_name,
        'to': '/' + sub.data.display_name_prefixed
    }
})

const sortBy = (sub) => {

    if(sub) {
        return [
        {'name': 'Hot', 'to': '/r/' + sub + '/hot/'},
        {'name': 'New', 'to': '/r/' + sub + '/new/'},
        {'name': 'Rising', 'to': '/r/' + sub + '/rising/'}
        ]
    }
    return [
        {'name': 'Hot', 'to': '/hot/'},
        {'name': 'New', 'to': '/new/'},
        {'name': 'Rising', 'to': '/rising/'}
        ]
}

export { formattedPosts, formattedSubs, sortBy }
export default convertUnix;