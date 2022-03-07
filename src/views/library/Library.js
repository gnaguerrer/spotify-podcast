import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useUser } from '../../API/hooks/useUser'
import { Loading } from '../../components/loading/Loading'
import { Card } from '../../components/card/Card'
import './Library.styles.css'

const Library = props => {
    const { myPlayList, getPlaylist } = useUser()
    console.log(myPlayList)
    useEffect(() => {
        getPlaylist('library')
    }, [])

    return (
        <div className='Library-container-view'  >
            {
                myPlayList?.loading
                    ? <div className='Library-container-view-loading' > <Loading size={60} />  </div>
                    : <div className='' >
                        <span className='Library-title'  >
                            playlists
                        </span>
                        <div className='Library-cards-container'  >
                            {
                                myPlayList.data?.map(item => (
                                    <Card {...item} />
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    )
}

Library.propTypes = {}

export { Library }