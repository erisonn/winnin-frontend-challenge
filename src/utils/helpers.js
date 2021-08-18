import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

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
        'thumbnail': post.data.thumbnail !== 'self' && post.data.thumbnail !== 'default' ? post.data.thumbnail:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Toicon-icon-open-read.svg/32px-Toicon-icon-open-read.svg.png',
        'author': post.data.author,
        'forum': '/' + post.data.subreddit_name_prefixed,
        'date': convertUnix(post.data.created_utc),
        'id': post.data.name
    }
})

const formattedSubs = (subs) => subs.map(sub => {
    return {
        'name': sub.title,
        'to': sub.url
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


// [
//     // {'name': 'Best', 'to': '/best/'},
//     {'name': 'Hot', 'to': '/hot/'},
//     {'name': 'New', 'to': '/new/'},
//     {'name': 'Rising', 'to': '/rising/'}
// ]

export { formattedPosts, formattedSubs, sortBy}
export default convertUnix;