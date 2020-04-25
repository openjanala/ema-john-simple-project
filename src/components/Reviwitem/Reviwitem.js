import React from 'react';

const Reviwitem = (props) => {
    
    const {name, quantity} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray',
        marginBottom:'10px',
        paddingBottom:'10px'
    };
    //console.log(props);
    return (
        <div style={reviewItemStyle}>
            <h1 className="product-name">{name}</h1>
            <h2>Quantity: {quantity}</h2>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default Reviwitem;