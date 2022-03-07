import React from 'react'
import PropTypes from 'prop-types'
import { dateFormat } from '../../utils/dateFormat';
import "./Card.styles.css"


const Card = props => {
    const { title, urls, updated_at } = props
    const date = new Date(updated_at)
    return (
        <div className='Card-container'>
            <img className='Card-img' src={urls?.banner_image?.original} />
            <div className='Card-container-text'  >
                <span className='Card-title'>
                    {title?.substring(0, 19)}
                    {title?.length > 19 && '...'}
                </span>
                <span className='Card-date' >
                    {
                        updated_at && `${dateFormat(date)?.day}  ${dateFormat(date)?.month} `
                    }
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    urls: PropTypes.object,
    updated_at: PropTypes.string,
}

export { Card }