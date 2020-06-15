import React from 'react';

const Image = (props) => {
    return (
        <div className="image" key={props.item.imageUrl}>
            <h3>Image with dimension {props.item.width} x {props.item.height}</h3>
            <img
                className="image"
                src={props.item.imageUrl}
                alt="Rk bhambri"
            />
        </div>
    );
};

export default Image;
