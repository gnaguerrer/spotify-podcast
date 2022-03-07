import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HiHeart, HiOutlineHeart } from "react-icons/hi"
import { CgMiniPlayer } from "react-icons/cg"
import { GiHamburgerMenu, GiSpeaker } from "react-icons/gi"
import { BiSpeaker } from "react-icons/bi"
import { AiFillPlayCircle, AiFillPauseCircle, AiOutlineExpandAlt } from "react-icons/ai"
import { MdSkipPrevious, MdSkipNext, MdUpdate, MdRestore } from "react-icons/md"
import './Player.styles.css'

const CLIP = 8042709

const CONTROL_OPTIONS = {
    play: 'PLAY',
    pause: 'PAUSE'
}

const Player = props => {
    const { currentClip, getCurrentClip } = props
    const [audio, setAudio] = useState(new Audio('http://streaming.tdiradio.com:8000/house.mp3'))
    const [playing, setPlaying] = useState(false);
    const [like, setLike] = useState(false)

    useEffect(() => {
        getCurrentClip(CLIP)
    }, [])


    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);


    const controlAudio = (type) => {
        if (type === CONTROL_OPTIONS.play) {
            setPlaying(true)
        } else if (type === CONTROL_OPTIONS.pause) {
            setPlaying(false)
        }
    }

    const toggleLike = () => { setLike(!like) }

    return (
        <div className='Player-container'>
            <div className='Player-container-description'>
                <img src={currentClip?.audio_clip?.urls?.image} className='Player-container-description-img' />
                <div className='Player-container-description-text-cont'>
                    <span className='Player-text Player-text-title'>
                        {currentClip?.audio_clip?.title.substring(0, 40)}
                        {currentClip?.audio_clip?.title.length > 40 && '...'}
                    </span>
                    <Link className='Without-underline' to='/'  >
                        <span className='Player-text Player-text-author'>
                            {currentClip?.audio_clip?.channel?.title}
                        </span>
                    </Link>
                </div>
                <div>
                    {
                        like
                            ? <HiHeart className='Player-text Player-icon' onClick={() => toggleLike()} />
                            : <HiOutlineHeart className='Player-text Player-icon' onClick={() => toggleLike()} />
                    }
                    <CgMiniPlayer className='Player-text Player-icon' />
                </div>
            </div>
            <div className='Player-container-control'>
                <div className='Player-container-control-items'>
                    <MdRestore className='Player-text Player-icon Player-icon-controls' />
                    <MdSkipPrevious className='Player-text Player-icon Player-icon-controls' />
                    {
                        playing
                            ? <AiFillPauseCircle className='Player-text Player-icon-play' onClick={() => controlAudio(CONTROL_OPTIONS.pause)} />
                            : <AiFillPlayCircle className='Player-text Player-icon-play' onClick={() => controlAudio(CONTROL_OPTIONS.play)} />

                    }
                    <MdSkipNext className='Player-text Player-icon Player-icon-controls' />
                    <MdUpdate className='Player-text Player-icon Player-icon-controls' />
                </div>
            </div>
            <div className='Player-container-options'>
                <GiHamburgerMenu className='Player-text Player-icon Player-icon-controls' />
                <BiSpeaker className='Player-text Player-icon Player-icon-controls' />
                <GiSpeaker className='Player-text Player-icon Player-icon-controls' />
                <AiOutlineExpandAlt className='Player-text Player-icon Player-icon-controls' />
            </div>
        </div>
    )
}

Player.propTypes = {
    currentClip: PropTypes.object,
    getCurrentClip: PropTypes.func
}

export { Player }