import React from 'react';
import { Colors } from '../../consts';
// import { Button } from 'react-native';

import styled from 'styled-components/native';
// import {useNavigation} from "@react-navigation/native";

const {backgroundColor} = Colors

export const Home = () => {

  console.log("home");

    return (
        <Container>
            <Text>home page</Text>
        </Container>

    );
}

const Container = styled.View`
  background: ${backgroundColor};
  height: 100%;
`;
const Text = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #eee;
`;
