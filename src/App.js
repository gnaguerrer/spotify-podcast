import React, { useEffect } from 'react'
import logo from './logo.svg';
import { Sidebar } from './components/sidebar/Sidebar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './views/home/Home';
import { Details } from './views/details/Details';
import { useUser } from './API/hooks/useUser';
import { Player } from './components/player/Player';
import { Header } from './components/header/Header';
import './theme/root.css';
import './App.css';

function App() {
  const { myPlayList, currentClip, getPlaylist, getCurrentClip } = useUser()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {

    }
  }, [])

  const handleScroll = () => { console.log(window.pageYOffset) }

  return (
    <BrowserRouter>
      <div className='Main-container'>
        <Sidebar playList={myPlayList} getPlaylist={getPlaylist} />
        <div className='Main-container-content'>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:type/:id" element={<Details />} />
              <Route path="/section" element={<Details />} />
            </Routes>
          </div>
        </div>
      </div>
      <Player currentClip={currentClip} getCurrentClip={getCurrentClip} />
    </BrowserRouter >

  );
}

export default App;
