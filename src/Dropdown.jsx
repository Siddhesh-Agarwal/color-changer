import { useState } from 'react';

function Dropdown(colors) {
    const [isOpen, setIsOpen] = useState(false);
    console.log(colors);
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
                <p id="label">Choose one</p>
                {isOpen ? (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z" fill="#212121" />
                    </svg>
                ) : (
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z" fill="#212121" />
                    </svg>
                )}
            </div>
            {isOpen && (
                <div className="dropdown-content">
                    {colors.options.map(color => (
                        // change background and #label on click
                        <div className="dropdown-item" onClick={() => { document.body.style.backgroundColor = color.value ; document.getElementById("label").innerHTML = color.label ; }}>
                            {color.label}
                            {/* change background color of body on click */}
                        </div>
                    ))}
                    {/* <div className="dropdown-item">
                        Darkblue
                    </div>
                    <div className="dropdown-item">
                        Lavender
                    </div>
                    <div className="dropdown-item">
                        Crimson
                    </div>
                    <div className="dropdown-item">
                        Dark Blue
                    </div>
                    <div className="dropdown-item">
                        Teal
                    </div>
                    <div className="dropdown-item">
                        Rebecca Purple
                    </div>
                    <div className="dropdown-item">
                        Ghost White
                    </div>
                    <div className="dropdown-item">
                        Aqua Marine
                    </div>
                    <div className="dropdown-item">
                        Alice Blue
                    </div> */}
                </div>
            )}
        </div>
    )
}

export default Dropdown;