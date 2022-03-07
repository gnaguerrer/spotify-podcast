import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHome } from '../../API/hooks/useHome'
import { CardList } from '../../components/cardList/CardList'
import { sectionTypes } from '../../constant/sectionTypes'
import { Loading } from '../../components/loading/Loading'
import "./Home.styles.css"

const Home = props => {
    const { channels, followed, popular, getChannelsRecomended, getClipsPopular, getClipsFollowed } = useHome()
    const [loading, setLoading] = useState(true)

    const getDashboard = async () => {
        setLoading(true)
        await Promise.all([
            getChannelsRecomended(),
            getClipsPopular(),
            getClipsFollowed()
        ])
        setLoading(false)
    }

    useEffect(() => {
        getDashboard()
    }, [])

    return (
        <div>
            {
                loading
                    ? <div className='Home-loading'><Loading size={70} /></div>
                    :
                    <div className='Home-background'  >
                        <CardList title='Episodios para ti' data={followed} type={sectionTypes.audio_clips} />
                        <CardList title='Sugerencias para hoy' data={channels} type={sectionTypes.channel} />
                        <CardList title='Episodios recomendados' data={popular} />
                    </div>
            }

        </div>
    )
}

Home.propTypes = {}

export { Home }