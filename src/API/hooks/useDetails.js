import React, { useEffect, useState } from 'react';
import { axiosRequest, METHOD } from '../axiosRequest';
import { Routes } from '../Routes';

const useDetails = () => {

    const [details, setDetails] = useState({ loading: true })

    const getAudioClipById = async (id) => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.clipById(id))
        if (!error) {
            setDetails({
                ...data.body.audio_clip,
                author: data.body.audio_clip.channel.title,
                image: data.body.audio_clip.urls.post_image.original,
                loading: false
            })
        }
    }

    const getChannelById = async (id) => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.channelById(id))
        const response = await axiosRequest(METHOD.GET, Routes.get.clipsByChannel(id))
        if (!error) {
            setDetails({
                ...data.body.channel,
                image: data.body.channel.urls.banner_image.original,
                audio_clips: response?.data?.body?.audio_clips,
                loading: false
            })
        }
    }




    return { details, getAudioClipById, getChannelById }
}
export { useDetails }