import { useState } from 'react';
import './Dropdown.css'
import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc';

// https://stackoverflow.com/a/47355187/14257886
function standardize_color(str) {
    var ctx = document.createElement("canvas").getContext("2d");
    ctx.fillStyle = str;
    return ctx.fillStyle;
}

// https://stackoverflow.com/a/35970186/14257886
function invertColor(hex) {
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b);
}

function padZero(str) {
    // optimized for short strings
    if (str.length === 2) {
        return str;
    } else {
        return '0' + str;
    }
}

function Dropdown(options) {
    const [isOpen, setIsOpen] = useState(false);
    // console.log(options);
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                <p id="label">Choose one</p>
                <span>
                    {isOpen ? (<VscTriangleUp />) : (<VscTriangleDown />)}
                </span>
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    {options.options.map(option => (
                        <div className="dropdown-item" onClick={() => {
                            document.getElementById("color-box").style.backgroundColor = option.value;
                            document.getElementById("label").innerHTML = option.label;
                            document.getElementById("placeholder").style.color = invertColor(standardize_color(option.value));
                            // collapse the dropdown
                            setIsOpen(false);
                        }}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown;