import React, { useState } from 'react'
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
  const [scrollY, setScrollY] = useState()

  const handleScroll = (event) => {
    let posY = event.target.scrollTop
    setScrollY(posY)
  }

  return (
    <BrowserRouter>
      <div className='Main-container'>
        <Sidebar playList={myPlayList} getPlaylist={getPlaylist} />
        <div className='Main-container-content' onScroll={handleScroll}>
          <Header scrollY={scrollY} />
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
