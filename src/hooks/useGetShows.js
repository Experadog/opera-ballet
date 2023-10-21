import React from 'react'
import { axiosRequest } from '../api/api'

const useGetShows = () => {
    const [scenesList, setScenesList] = React.useState([])

    const getScenes = React.useCallback(async () => {
        const { data } = await axiosRequest.get('/shows/')

        if (data.length === 0) {
            return []
        }

        setScenesList(data)
    }, [])

    React.useEffect(() => {
        getScenes()
    }, [getScenes])

    return { scenesList }
}

export default useGetShows
