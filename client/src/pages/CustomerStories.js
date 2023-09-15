import React from 'react';
import CustomerStoryCard from '../components/CustomerStory/CustomerStoryCard';

const CustomerStories = () => {
    const customerStories = [
        {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg',
            story: "Loved the designer red peplum style outfit I wore for a friend's wedding. Heavy on style and low on budget is what impressed me a lot. Rent An Attire is the perfect solution to your everyday function wear problem. Great concept and quality Team!!",
            customerName: 'Gungun Uprari (TV Actress)',
        },
        {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I had a fantastic experience with Rent An Attire. Their collection is amazing, and the service is top-notch. I highly recommend them to everyone looking for stylish outfits.",
            customerName: 'John Doe',
        },
        {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "Rent An Attire saved my day! I found the perfect dress for a special occasion, and it fit like a dream. Plus, their prices are unbeatable. Thank you!",
            customerName: 'Jane Smith',
        },
        {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        },
        {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        }, {
            imageSrc: 'https://www.rentanattire.com//uploaded_files/site/9dd4935ad0cbc9452eded3f5dceb57e7.jpg', // Replace with your image URL
            story: "I've been a loyal customer of Rent An Attire for years. Their quality and variety never disappoint. It's my go-to place for all my outfit needs.",
            customerName: 'David Johnson',
        },
        // Add more customer stories here as needed
    ];

    const containerStyle = {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100vw',
        backgroundSize: '100%',
        paddingX: '100px',
    };

    const imageStyle = {
        flex: '1',
        height: '300px',
        marginTop: '40px',
        marginBottom: '40px',
        opacity: 0.9,
        padding: '50px',
        borderRadius: '70px'
    };

    const textStyle = {
        position: 'absolute',
        top: '50%',
        left: '20%',
        transform: 'translate(-34%, -50%)',
        color: "#ffffff"
    };

    return (
        <div>
            <div style={containerStyle}>
                <img
                    src="https://img.freepik.com/free-photo/blurred-clothing-store-shopping-mall_1258-5.jpg?w=900&t=st=1694797019~exp=1694797619~hmac=00e092102423f2d5b17a3c34293f5158be6aeb5b82012b10cf13bf64a47e96dc"
                    style={imageStyle}
                    alt="Customer Story"
                />
                <div style={textStyle}>
                    <h1>Customer Stories...♡</h1>
                </div>


            </div>
            <div className="row m-5">
                {customerStories.map((story, index) => (
                    <div className="col-md-3 my-2" key={index}>
                        <CustomerStoryCard {...story} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomerStories;
