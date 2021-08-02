import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen';
import TimerScreen from './components/TimerScreen';
import soundfile from './resources/bell.mp3';

const App = () => {

    const [interval, setInterval] = useState(6);
    const [screen, setScreen] = useState('Home');

    return (
        <div>
            {
                screen === "Home" ? 
                <HomeScreen 
                    setInterval={setInterval}
                    setScreen={setScreen}
                /> : 
                <TimerScreen
                    interval={interval}
                    setScreen={setScreen}
                />
            }
            <audio className="audio-element">
                <source src={soundfile}></source>
            </audio>
        </div>
    );
}

ReactDOM.render( <App />, document.getElementById('app'));