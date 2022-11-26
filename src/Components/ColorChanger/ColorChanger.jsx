import './ColorChanger.css';

function ColorChanger({ color }) {
    return (
        <div id="color-box" style={{ backgroundColor: color }}>
            <h1 id='placeholder'>Placeholder text</h1>
        </div>
    )
}

export default ColorChanger;