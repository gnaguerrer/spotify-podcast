import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { useNavigate } from 'react-router-dom';
import './Header.styles.css'

const checkpoint = 30;

const Header = props => {
    const { scrollY } = props
    const navigate = useNavigate();

    const handleNavigation = (type) => {
        if (type === 'back') {
            navigate(-1)
        } else {
            navigate(1)
        }
    }

    return (
        <div className='Header-container' >
            <div style={{ opacity: scrollY > checkpoint ? 1 : 0 }} className='Header-container-scroll' />
            <div className='Header-icons'   >
                <span onClick={() => handleNavigation('back')}  >
                    <MdOutlineNavigateBefore className='Header-icons-arrows' />
                </span>
                <span onClick={() => handleNavigation('next')}  >
                    <MdOutlineNavigateNext className='Header-icons-arrows' />
                </span>
            </div>
        </div>
    )
}

Header.propTypes = {}

export { Header }