import * as React from 'react';
import ImageGallery from 'react-image-gallery';
import PropTypes from "prop-types";

const ImageGalleryBox = ({ imageList }) => {

    let images = imageList.map(element => {
        return { original: element, thumbnail: element };
    });

    return (
        <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
        />
    );
}

ImageGalleryBox.propTypes = {
    imageList: PropTypes.array
};

export default ImageGalleryBox;