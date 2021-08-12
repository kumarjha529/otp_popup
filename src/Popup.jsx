import React, { useState } from "react";
import './Popup.css';

const Popup = ({ closeModal }) => {
    const [otp, setOtp] = useState(new Array(6).fill(""));

    const handleChange = (event, index) => {
        //console.log(event.nativeEvent.inputType);
        const a = event.target.value.trim();
        if (!isNaN(a)) {
            setOtp([...otp.map((d, idx) => (idx === index ? a : d))]);
        }

    };

    const handleKeyUp = (event, index) => {
        //console.log(event);
        if (event.key === "Backspace" && event.target.previousSibling) {
            // Focus on the previous field
            event.target.previousSibling.focus();

        } else if (event.target.nextSibling && event.target.value.trim() != "") {
            event.target.nextSibling.focus();
        }

    }

    return (
        <>
        <div className="modalBackground">
            <div class="container">
                <h1> ENTER OTP </h1>
    
                <div class="userInput">
                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onKeyUp={e => handleKeyUp(e, index)}
                                onInput={e => handleChange(e, index)}
                                onFocus={e => e.target.select()}
                                autoFocus={index == 0}
                            />
                        );
                    })}
                </div>

                <div className="btn-centre"  id="cancel-btn">
                    <button onClick={() => {
                        closeModal(false);
                    }} >CANCEL </button>

                    <button onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            
                            }> VERIFY </button>
                </div>
            </div>
            </div>  {/*MOdal background div */}


        </>


    )
}

export default Popup;