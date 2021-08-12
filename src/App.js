import React, { useState } from "react";
import './App.css';
import Popup from './Popup';

function App() {

  const [popupOpen, setPopupOpen] = useState(false);
  return (
    <div className="btn-main">
      <button onClick={() => {
        setPopupOpen(true);
      }}> OTP Verification </button>

      {popupOpen && <Popup closeModal={setPopupOpen} />}

    </div>
  )
}

export default App;
