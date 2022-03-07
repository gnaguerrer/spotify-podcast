import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { BsDot } from "react-icons/bs"
import { MdIosShare } from "react-icons/md"
import { dateFormat } from '../../../../utils/dateFormat'
import { secondsToString } from '../../../../utils/secondsToString'


const EpisodesSection = props => {
    const { title, description, channel, updated_at, duration } = props
    const date = new Date(updated_at)
    const [showOptions, setShowOptions] = useState(false)

    const handleShowOptions = (type) => { setShowOptions(type) }


    return (
        <div className='Details-container-episode' onMouseEnter={() => handleShowOptions(true)} onMouseLeave={() => handleShowOptions(false)}  >
            <div >
                <img className='Details-episode-img' src={channel.urls.logo_image.original} />

            </div>
            <div>
                <div className='Details-episode-title'>
                    {title}
                </div>
                <p className='Details-episode-description'  >
                    {description?.substring(0, 220)}
                    {description?.length > 220 && '...'}

                </p>
                <div className='Details-episode-options'>
                    <div className='algin-center'>
                        <AiFillPlayCircle className='Details-episode-icon' />
                        <span className='Details-episode-options-text'>
                            {`${dateFormat(date)?.day} ${dateFormat(date)?.month}`}
                        </span>
                        <span className='Details-episode-options-text'>
                            <BsDot />
                        </span>
                        <span className='Details-episode-options-text'  >
                            {secondsToString(duration)}
                        </span>
                    </div>
                    <div className='algin-center'>
                        {
                            showOptions && (
                                <>
                                    <MdIosShare className='Details-episode-option-icon' />
                                    <AiOutlinePlusCircle className='Details-episode-option-icon' />
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

EpisodesSection.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    channel: PropTypes.object,
    updated_at: PropTypes.string,
    duration: PropTypes.number
}

export { EpisodesSection }