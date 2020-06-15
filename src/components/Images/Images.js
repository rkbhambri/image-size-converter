import React from 'react';
import Image from './Image/Image';
import { parseData, getItem } from '../../helpers/helpers';

const Images = (props) => {
    return (
        <div className="images">
            {
                parseData(getItem('images')).map((item, imageIndex) => {
                    return (
                        <Image item={item} key={imageIndex} />
                    );
                })
            }
        </div>
    );
};

export default Images;
