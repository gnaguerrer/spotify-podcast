import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    useParams,
} from "react-router-dom";
import { useDetails } from '../../API/hooks/useDetails'
import { sectionTypes } from '../../constant/sectionTypes';
import { Loading } from '../../components/loading/Loading';
import { AudioClip } from './components/audioClip/AudioClip';
import { ChannelDetails } from './components/channelDetails/ChannelDetails';
import './Details.styles.css'

const Details = props => {
    const { details, getAudioClipById, getChannelById } = useDetails()
    const { id, type } = useParams();

    useEffect(() => {
        console.log(id, type)
        if (type === sectionTypes.audio_clips) {
            getAudioClipById(id)
        } else {
            getChannelById(id)
        }
    }, [id, type])



    return (
        <div className='Details-loading'  >
            {
                details?.loading
                    ? (
                        <div className='Details-loading'>
                            <Loading size={60} />
                        </div>
                    )
                    : (
                        <div className='Details-container'>
                            <div className='Details-container-header'  >
                                <img className='Details-img' src={details.image} />
                                <div className='Details-container-header-description'  >
                                    <span className='Details-header-subtitle text-uppercase'>
                                        {type === sectionTypes.audio_clips ? 'Episodio de podcast' : 'Podcast'}
                                    </span>
                                    <span className='Details-header-title'  >
                                        {details.title}
                                    </span>
                                    <span className='Details-title'  >
                                        {details.author}
                                    </span>
                                </div>
                            </div>
                            {
                                type === sectionTypes.audio_clips
                                    ? <AudioClip {...details} />
                                    : <ChannelDetails {...details} />
                            }
                        </div>
                    )
            }
        </div>
    )
}

Details.propTypes = {}

export { Details }