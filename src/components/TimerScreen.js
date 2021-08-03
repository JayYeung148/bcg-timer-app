import React, {useState, useEffect} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const TimerScreen = (props) => {

    const style = {
        display: 'flex',
        paddingTop: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 150
    }

    const centerStyle = {
        margin: 0,
        alignSelf: 'center'
    }

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    };

    const [progress, setProgress] = useState(100);
    const [progressInt, setProgressInt] = useState(props.interval);

    useEffect(() => {
        const intervalFunc = setInterval(() => {
            playAudio();
            setProgress(100);
            setProgressInt(props.interval);
        }, props.interval * 1000);
        return () => clearInterval(intervalFunc);
    }, []);

    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress(progress-3.33);
        }, props.interval * 1000 / 30);
        return () => clearInterval(progressInterval);
    }, [progress]);

    useEffect(() => {
        const progressIntInterval = setInterval(() => {
            setProgressInt(progressInt-1);
        }, 1000);
        return () => clearInterval(progressIntInterval);
    }, [progressInt]);

    return(
        <div style={style}>
            <Typography variant="h4">Timer</Typography>
            {/* <Typography variant="h4">{progress}</Typography> */}
            {/* <CircularProgress 
                variant="determinate"
                value={progress}
            /> */}
            <CircularProgressWithLabel value={progress} valueInt={progressInt}/>
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