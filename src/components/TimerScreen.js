import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const TimerScreen = (props) => {

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100
    }

    const centerStyle = {
        margin: 0,
        alignSelf: 'center'
    }

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    };

    useEffect(() => {
        const intervalFunc = setInterval(() => {
          console.log('TRIGGERED!');
          playAudio();
        }, props.interval * 1000);
        return () => clearInterval(intervalFunc);
      }, []);

    return(
        <div style={style}>
            <Typography variant="h4">Timer</Typography>
            <Button
                style={centerStyle}
                variant="contained"
                onClick={() => {props.setScreen("Home")}}
            >
                Cancel
            </Button>
        </div>
    );
};

export default TimerScreen;