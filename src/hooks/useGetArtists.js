import React from 'react'
import { axiosRequest } from '../api/api'

const useGetArtists = () => {
    const [artistsList, setArtistsList] = React.useState([])

    const getArtist = React.useCallback(async () => {
        const { data } = await axiosRequest.get('/artists/')

        if (data.length === 0) {
            return []
        }

        setArtistsList(data)
    }, [])

    React.useEffect(() => {
        getArtist()
    }, [getArtist])

    return { artistsList }
}

export default useGetArtists
