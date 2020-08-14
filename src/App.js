
import React from 'react';
import eaglesLogo from './assets/images/eagles2.jpg';
import chihauhausLogo from './assets/images/angry-chihuahua.jpg';
import bullyLogo from './assets/images/da-bull.jpg';
import gcLogo from './assets/images/madbird.jpg';
import Game from './components/game/Game';
import './App.css';

function App(props) {
    const eagles = {
        name: 'Eagles',
        logoSrc: eaglesLogo
    }
    const chihuahuas = {
        name: 'Angry Chihuahuas',
        logoSrc: chihauhausLogo
    }
    const bully = {
        name: 'Bull Shite',
        logoSrc: bullyLogo
    }
    
    const rooster = {
        name: 'Game Cocks',
        logoSrc: gcLogo
    }
    return (
        <div className="App">
            <Game venue="The Garden"
                homeTeam={chihuahuas}
                visitingTeam={eagles} />
            <Game venue="The Dog Pound"
                homeTeam={bully}
                visitingTeam={rooster} />

        </div>
    )
}
export default App;