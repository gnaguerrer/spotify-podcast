import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Card } from '../card/Card'
import './CardList.styles.css'

const small = window.matchMedia('(min-width: 600px) and (max-width: 800px)')
const normal = window.matchMedia('(min-width: 1222px) and (max-width: 1824px)')
const large = window.matchMedia('(min-width: 1825px)')

const CardList = props => {
    const { data, title, type } = props


    useEffect(() => {
        itemsToShow()
    }, [])


    const itemsToShow = () => {
        if (small.matches) {
            return 4
        } else if (normal.matches) {
            return 6
        } else if (large.matches) {
            return 8
        }
    }

    return (
        <div className='CardList-container'>
            <div className='CardList-container-title'  >
                <span className='CardList-title'>
                    {title}
                </span>
                <span className='CardList-options'>
                    ver todo
                </span>
            </div>
            <div className='CardList-container-data'>
                {
                    data.slice(0, itemsToShow())?.map?.((item) => (
                        <Link key={item.id} to={`/details/${type}/${item.id}`}  >
                            <Card {...item} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

CardList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
    type: PropTypes.string
}

export { CardList }