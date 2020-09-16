import client from './client'

export const search = ({}) =>
    client.get('/search/viva la vida')