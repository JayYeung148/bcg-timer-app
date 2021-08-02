import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';

const valuetext = (value) => {
    return `${value} seconds`;
  }

const HomeScreen = (props) => {

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0];
        audioEl.play();
    };

    const [number, setNumber] = useState(6);

    const handleChange = (event, newValue) => {
        setNumber(newValue)
    }

    return (
        <div>
            <Typography variant="h4">Set timer interval:</Typography>
            <Slider
                value={number}
                onChange={handleChange}
                defaultValue={6}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={1}
                max={12}
                valueLabelDisplay="auto"
            />
            <Button
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