import './App.css';
import Dropdown from './Dropdown.jsx'

function App() {
    var options = [
        { 'label': 'Lime', 'value': 'lime' },
        { 'label': 'Lavender', 'value': 'lavender' },
        { 'label': 'Crimson', 'value': 'crimson' },
        { 'label': 'Darkblue', 'value': 'darkblue' },
        { 'label': 'Teal', 'value': 'teal' },
        { 'label': 'Rebecca Purple', 'value': 'rebeccapurple' },
        { 'label': 'Ghost White', 'value': 'ghostwhite' },
        { 'label': 'Aqua Marine', 'value': 'aquamarine' },
        { 'label': 'Alice Blue', 'value': 'aliceblue' }
    ];
    return (
        <div className="App">
            {/* Heading  */}
            <h1 className='app-title'>Color Chooser</h1>

            {/* Component  */}
            <Dropdown options={options} />
        </div>
    );
}

export default App;
