import { Slider, RangeSlider } from 'rsuite';

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>BCG Timer</h1>
                <h2>Set an interval</h2>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header/>
        <Slider />
    </div>
);

ReactDOM.render(jsx, document.getElementById('app'));