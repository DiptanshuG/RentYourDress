import React from 'react';
import Card from 'react-bootstrap/Card';

const CustomerStoryCard = ({ imageSrc, story, customerName }) => {
  return (
    <Card className="portfolio-item" style={{ position: 'relative', left: '0px', top: '0px' }}>
      <Card.Img src={imageSrc} alt="Customer Story" />
      <Card.Body>
        <Card.Text style={{color:"#757575"}}>{story}</Card.Text>
        <div className="m-top-0 m-bot-20">
          <div className="date font-italic">{customerName}</div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerStoryCard;
