import React from 'react';
import './StartButton.css';
import Button from "react-bootstrap/Button";

const startDemo = () => {
    console.log("Demo started.");
    window.location.href('/A01');
}

function StartButton() {
    return(
        <Button className="start-button" variant="primary" onClick={startDemo}>START</Button>
    );
}

export default StartButton;