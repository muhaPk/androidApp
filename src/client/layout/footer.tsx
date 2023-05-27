import React, {FC} from 'react';
import styled from 'styled-components/native';

import { Row } from '../ui/Grid/Row';
import {useNavigation} from "@react-navigation/native";
import {IconButton} from "react-native-paper";


export const Footer: FC = () => {

    const navigation = useNavigation();

    return (
        <Container>
            <Row justify='space-between'>

                <IconButton
                    onPress={() => { navigation.navigate('Groups'); }}
                    icon="party-popper"
                    iconColor="#000"
                    size={20}
                />
                <IconButton
                    onPress={() => { navigation.navigate('Users'); }}
                    icon="human-male-male"
                    iconColor="#000"
                    size={20}
                />

            </Row>
        </Container>
    );
};


const Container = styled.View`
  padding: 5px;
  background: #4b586d;
  color: #ccc;
`;
