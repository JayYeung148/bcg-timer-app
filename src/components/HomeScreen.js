import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import { flexbox } from '@material-ui/system';

const valuetext = (value) => {
    return `${value} seconds`;
  }

const HomeScreen = (props) => {

    const style = {
        display: 'flex',
        paddingTop: 30,
        paddingLeft: 20,
        paddingRight: 20,
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

    const [number, setNumber] = useState(6);

    const handleChange = (event, newValue) => {
        setNumber(newValue)
    }

    return (
        <div style={style}>
            <Typography variant="h5">Set timer interval:</Typography>
            <Slider
                value={number}
                onChange={handleChange}
                defaultValue={6}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={1}
                max={11}
                valueLabelDisplay="auto"
            />
            <Button
                style={centerStyle}
                variant="contained"
                onClick={() => {
                    playAudio();
                    props.setInterval(number);
                    props.setScreen("Timer");
                }}
            >
                Start timer
            </Button>
        </div>
    );
};

export default HomeScreen;