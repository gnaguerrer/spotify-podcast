import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { VscLibrary } from "react-icons/vsc";
import { GrHomeRounded } from "react-icons/gr"
import { FiSearch } from "react-icons/fi"
import { AiFillPlusSquare } from "react-icons/ai"
import { BiHeartSquare } from "react-icons/bi"
import styled from 'styled-components'
import { MenuItem } from './components/menuItem/MenuItem';
import { Images } from '../../assets/Images'
import { Loading } from '../loading/Loading';
import './Sidebar.styles.css'

export const ScrollItem = styled.div`
    opacity: ${props => (props.scrollY >= props.posItem && props.scrollY < props.posNextItem) ? 0.2 : 1} 
`;


const MENU_OPTIONS = [
    { id: 1, name: 'Inicio', path: '/', Icon: <GrHomeRounded /> },
    { id: 2, name: 'Buscar', path: '/search', Icon: <FiSearch className='icon' /> },
    { id: 2, name: 'Tu Biblioteca', path: '/Library', Icon: <VscLibrary className='icon' /> }
]

const OTHER_OPTIONS = [
    { id: 1, name: 'Crear tu paylist', path: '/', Icon: <AiFillPlusSquare className='icon' size={26} /> },
    { id: 2, name: 'Tus me gusta', path: '/', Icon: <BiHeartSquare className='icon' size={26} /> },
]



const Sidebar = props => {
    const { playList, getPlaylist } = props
    const location = useLocation();
    const [scrollY, setScrollY] = useState()

    /**
     * Gets scroll to top of playlist section
     * @param {*} event 
     */
    const handleScroll = (event) => {
        let posY = event.target.scrollTop
        setScrollY(posY)
    }

    useEffect(() => {
        getPlaylist()
    }, [])


    return (
        <div className='Container'>
            <div className='Logo-container'>
                <Link to='/' >
                    <img className='Logo' src={Images.logo} alt='spotify-logo' />
                </Link>
            </div>
            <div className='Menu-container'>
                <div>
                    {
                        MENU_OPTIONS?.map((item, index) => (
                            <Link key={index} className='Without-underline' to={item.path}>
                                <MenuItem current={location.pathname} path={item.path}>
                                    {item.Icon}
                                    <span className='Library-text Menu-item-text'>{item.name}</span>
                                </MenuItem>
                            </Link>
                        ))
                    }
                </div>
                <div>
                    {
                        OTHER_OPTIONS?.map((item, index) => (
                            <MenuItem key={index} current={location.pathname} path={item.path}  >
                                {item.Icon}
                                <span className='Library-text Menu-item-text-other'>{item.name}</span>
                            </MenuItem>
                        ))
                    }
                </div>
            </div>
            <div className='Divider' />
            <div className='Library-container' onScroll={handleScroll} >
                {
                    playList.loading ?
                        <div className='centered'  > <Loading /> </div>
                        : playList.data?.map?.((item, index) => {
                            let posItem = (30 * index) + 1
                            let posNextItem = 30 * (index + 1)
                            return (
                                <Link key={item.id} className='Without-underline' to='/' >
                                    <ScrollItem posItem={posItem} posNextItem={posNextItem} scrollY={scrollY}>
                                        <MenuItem current={location.pathname} path={item.path} size='small'>
                                            <span className='Library-text'>{item.title}</span>
                                        </MenuItem>
                                    </ScrollItem>

                                </Link>
                            )
                        })
                }
            </div>
        </div >
    )
}

Sidebar.propTypes = {
    playlist: PropTypes.object,
    getPlaylist: PropTypes.func
}

export { Sidebar }