import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FiMoreHorizontal } from "react-icons/fi"
import { EpisodesSection } from '../episodesSection/EpisodesSection'


const ChannelDetails = props => {
    const { description, category, audio_clips } = props
    const [follow, setFollow] = useState(false)
    const toggleFollow = () => { setFollow(!follow) }
    return (
        <div >
            <div className='Details-channel-options'  >
                <div className='Details-channel-follow-options' onClick={() => toggleFollow()} >
                    {
                        follow
                            ? 'siguiendo'
                            : 'seguir'
                    }
                </div>
                <FiMoreHorizontal className='Details-icon' />
            </div>
            <div className='Details-container-channel'  >
                <div className='Details-container-channel-main' >
                    <span className='Details-title' >
                        Todos los episodios
                    </span>
                    {
                        audio_clips?.map((clip) => (
                            <EpisodesSection {...clip} />
                        ))
                    }
                </div>
                <div className='Details-container-channel-about'  >
                    <span className='Details-title' >
                        Acerca de
                    </span>

                    <p className='Details-channel-description'  >
                        {description}
                    </p>
                    <span className='Details-header-subtitle Details-tag' >
                        {category.title}
                    </span>

                </div>
            </div>
        </div>
    )
}

ChannelDetails.propTypes = {
    description: PropTypes.string,
    category: PropTypes.string,
    audio_clips: PropTypes.array
}

export { ChannelDetails }