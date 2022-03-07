import React, { useEffect, useState } from 'react';
import { axiosRequest, METHOD } from '../axiosRequest'
import { Routes } from '../Routes';

const useHome = () => {
    const [channels, setChannels] = useState([])
    const [followed, setFollowed] = useState([])
    const [popular, setPopular] = useState([])

    const getChannelsRecomended = async () => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.channelsRecomended,)
        if (!error) {
            setChannels(data.body)
        }
    }

    const getClipsPopular = async () => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.clipsPopular)
        if (!error) {
            setPopular((prev) => data.body.audio_clips.map((item) => (
                { ...item, 'urls': { ...item.urls, banner_image: { original: item.channel.urls.logo_image.original } } }
            )))

        }
    }

    const getClipsFollowed = async () => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.clipsFollowed(5))
        if (!error) {
            setFollowed((prev) => data.body.audio_clips.map((item) => (
                { ...item, 'urls': { ...item.urls, banner_image: { original: item.urls.image } } }
            )))
        }
    }

    return { channels, followed, popular, getChannelsRecomended, getClipsPopular, getClipsFollowed }
}
export { useHome }