import React from 'react';
import { Button } from "react-native-paper";
import {Colors} from "../consts";

export const CustomButton = ({type, title, ...rest}) => {

    const {textColor, blueColor} = Colors

    return (
        <Button type={type} buttonColor={blueColor} textColor={textColor} style={{marginTop: 10}} {...rest} >{title}</Button>
    )
}
