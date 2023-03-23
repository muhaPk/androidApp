import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface CardProps {
  width?: string;
  height?: string;
  variant?: string;
}

const Card: FC<CardProps> = ({width, height, variant, children}) => {
  return (
    <Text>{children}: {width} </Text>
  )
}

export default Card;
