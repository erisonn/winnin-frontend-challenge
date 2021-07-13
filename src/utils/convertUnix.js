import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)
//a data de criação dos posts da API são em UNIX. essa função passa a data para algo legível.
const convertUnix = (created_date) => {
    const timeAgo = new TimeAgo('en-US')
    return timeAgo.format(new Date(created_date * 1000))
}

export default convertUnix