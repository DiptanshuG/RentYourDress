import React from "react";
import "../../styles/Thoughts.css";

function Thoughts(props) {
  return (
    <div>
      <div className="section">
        {/* Left div with one thought */}
        <div className="left-div">
        <h5 className="custom-heading">WHAT MEMBERS ARE SAYING</h5>
          <p className="custom-text">“I've done them ALL and RentYourDress is hands down the best clothing rental service.”</p>
          <p className="centered-text-name">— Gina T.</p>
        </div>

        {/* Right div with four small divs */}
        <div className="right-div">
        {props.thoughsList.map((thought) => (
            <div key={thought.id} className={`${thought.color === "dark" ? 'small-div1' : 'small-div'}`}>
            <p className="centered-text">{thought.text}</p>
            <p className="centered-text-name">{thought.author}</p>
          </div>
        ))}    
        </div>
      </div>
    </div>
  );
}

export default Thoughts;
