import React from 'react';

const BadgeButton = ({ text, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    fontWeight: '500',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '75px',
    cursor: 'pointer',
    boxShadow: '10px 10px 5px 0px rgba(130,104,130,1)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: '5%',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default BadgeButton;
