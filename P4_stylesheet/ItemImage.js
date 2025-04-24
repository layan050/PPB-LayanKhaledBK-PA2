import React from 'react';
import { View, Image } from'react-native';

const ItemImage = () => {
    return (
        <View>
            <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' }}
                style={{ width: 150, height: 150 , borderRadius: 80 }}
            />
        </View>
    );
}

export default ItemImage;
