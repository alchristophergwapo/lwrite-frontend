import { Container } from '@material-ui/core';
import React from 'react';

export default props => {
    let {imageSource, image, imageAlt} = props;
    return(
        <div>
            <div>
                <img src={imageSource} alt={imageAlt} style={{...styles.imageStyle, ...image}} />
            </div>
        </div>
    )
}

const styles = {
    imageStyle: {
        flex: 1,
        width: '100%',
        height: '450px',
        resizeMode: 'contain'
    }
}