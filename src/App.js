import './App.css';
import Dropdown from './Components/Dropdown/Dropdown.jsx'
import ColorChanger from './Components/ColorChanger/ColorChanger';

function App() {
    var options = [
        {
            'label': 'Lime',
            'value': 'lime'
        },
        {
            'label': 'Lavender',
            'value': 'lavender'
        },
        {
            'label': 'Crimson',
            'value': 'crimson'
        },
        {
            'label': 'Darkblue',
            'value': 'darkblue'
        },
        {
            'label': 'Teal',
            'value': 'teal'
        },
        {
            'label': 'Rebecca Purple',
            'value': 'rebeccapurple'
        },
        {
            'label': 'Ghost White',
            'value': 'ghostwhite'
        },
        {
            'label': 'Aqua Marine',
            'value': 'aquamarine'
        },
        {
            'label': 'Alice Blue',
            'value': 'aliceblue'
        }
    ];
    return (
        <div className="App">
            <h1 id="app-title">React Dropdown</h1>
            <Dropdown options={options} />
            <ColorChanger options={'white'} />
        </div>
    );
}

export default App;
