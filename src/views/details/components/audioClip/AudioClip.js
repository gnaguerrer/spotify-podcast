import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { FiMoreHorizontal } from "react-icons/fi"
import { BsDot } from "react-icons/bs"
import { Card } from '../../../../components/card/Card'
import { dateFormat } from '../../../../utils/dateFormat'
import { secondsToString } from '../../../../utils/secondsToString'
import { useHome } from '../../../../API/hooks/useHome'


const AudioClip = props => {
    const { updated_at, duration, description } = props
    const { channels, getChannelsRecomended } = useHome()
    const date = new Date(updated_at)
    const [seeMore, setSeeMore] = useState(false)

    const toggleSeeMore = () => { setSeeMore(!seeMore) }


    useEffect(() => {
        getChannelsRecomended()
    }, [])


    return (
        <div>
            <div>
                <span className='Details-audioClip-details'>
                    {`${dateFormat(date)?.day} ${dateFormat(date)?.month}`}
                    <BsDot />
                    <span>
                        {secondsToString(duration)}
                    </span>
                </span>
                <div className='Details-container-icon'  >
                    <AiFillPlayCircle className='Details-play-icon' />
                    <AiOutlinePlusCircle className='Details-icon' />
                    <FiMoreHorizontal className='Details-icon' />
                </div>
                <div>
                    <span className='Details-title' >
                        Descripción del episodio
                    </span>
                    <p className='Details-description'  >
                        {description?.substr?.(0, seeMore ? description.length : 278)}
                    </p>
                    <span className='Details-seeMore' onClick={() => toggleSeeMore()}  >{!seeMore ? '...Ver Mas' : 'Mostar menos'}
                    </span>

                    <span className='Details-button-seeMore' >
                        Ver todos los episodios
                    </span>

                </div>
                <div>
                    <span className='Details-title'  >
                        También te podría gustar
                    </span>
                    <div className='Details-container-recomendation'  >
                        {
                            channels?.slice(0, 4).map?.((item) => (
                                <Card {...item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

AudioClip.propTypes = {
    updated_at: PropTypes.string,
    duration: PropTypes.number,
    description: PropTypes.string
}

export { AudioClip }