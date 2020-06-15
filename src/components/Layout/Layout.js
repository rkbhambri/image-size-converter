import React, { useState } from 'react';
import UploadButton from '../UploadButton/UploadButton';
import Images from '../Images/Images';
import { parseData, getItem, setItem } from '../../helpers/helpers';

const Layout = (props) => {

    const [, forceUpdate] = useState();
    const [dimensions] = useState([
        {
            width: '755',
            height: '450'
        },
        {
            width: '365',
            height: '450'
        },
        {
            width: '365',
            height: '212'
        },
        {
            width: '380',
            height: '380'
        }
    ]);

    const compress = (event) => {
        if (event.target.files[0]) {
            const totalDimensions = dimensions.length;
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = event => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = function () {
                    if (img.width === 1024 && img.height === 1024) {
                        for (let i = 0; i < totalDimensions; i++) {
                            const canvas = document.createElement('canvas');
                            canvas.width = dimensions[i].width;
                            canvas.height = dimensions[i].height;
                            const ctx = canvas.getContext('2d');
                            // img.width and img.height will contain the original dimensions
                            ctx.drawImage(img, 0, 0, dimensions[i].width, dimensions[i].height, 0, 0, 1024, 1024);
                            let items = parseData(getItem('images'));
                            items.push({
                                height: dimensions[i].height,
                                width: dimensions[i].width,
                                imageUrl: canvas.toDataURL()
                            });
                            setItem('images', JSON.stringify(items))
                            forceUpdate(canvas.toDataURL());
                        }
                    } else {
                        alert('Please upload the image of dimension 1024 x 1024');
                    }
                    return img.onload;
                    // reader.onerror = error => console.log(error);
                };
            }
        }
    };

    if (!getItem('images')) {
        setItem('images', JSON.stringify([]));
    }

    return (
        <div className="app">
            <UploadButton compress={(event) => compress(event)} />
            {parseData(getItem('images')).length > 0 && <Images />}
        </div>
    );
};

export default Layout;
