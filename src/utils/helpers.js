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
        'thumbnail': post.data.thumbnail,
        'author': post.data.author,
        'forum': '/' + post.data.subreddit_name_prefixed,
        'date': convertUnix(post.data.created_utc),
        'id': post.data.name
    }
})

export { formattedPosts }
export default convertUnix;