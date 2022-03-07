import React, { useEffect, useState } from 'react';
import { axiosRequest, METHOD } from '../axiosRequest';
import { Routes } from '../Routes';

const ID = 5;

const useUser = () => {

    const [myPlayList, setMyPlayList] = useState({ loading: true, data: [] })
    const [currentClip, setCurrentClip] = useState({})

    /**
      * Obtiene las playlist del usuario
      */
    const getPlaylist = async () => {
        const { data, error, response } = await axiosRequest(METHOD.GET, Routes.get.playlist(ID))
        if (!error) {
            setMyPlayList({ loading: false, data: data?.body.playlist })
        }
    }

    const getCurrentClip = async (id) => {
        const { data, error } = await axiosRequest(METHOD.GET, Routes.get.clipById(id))
        if (!error) {
            setCurrentClip(data.body)
        }
    }

    return { myPlayList, currentClip, getPlaylist, getCurrentClip }
}
export { useUser }