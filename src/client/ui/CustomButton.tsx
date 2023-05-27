import React, {FC} from 'react';
import { Button } from "react-native-paper";
import {Colors} from "../consts";

type Props = {
    type: string;
    title: string;
}

export const CustomButton: FC<Props> = ({type, title, ...rest}: Props) => {

    const {textColor, blueColor} = Colors

    return (
        <Button type={type} buttonColor={blueColor} textColor={textColor} style={{marginTop: 10}} {...rest} >{title}</Button>
    )
}
