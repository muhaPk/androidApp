import React from "react";
import { Image } from "react-native";


export const ImageWrapper = ({filePath = 'default.png'}) => {


  return <Image source={{uri: `asset:/images/${filePath}`}} style={{width: 100, height: 100}} />
}
