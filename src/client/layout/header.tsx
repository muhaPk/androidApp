import React, {FC} from 'react';

import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import { Row } from '../ui/Grid/Row';
import { IconButton } from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../src/reducers/usersReducer";
import {clearGroups} from "../src/reducers/groupReducer";
import {clearFiles} from "../src/reducers/fileReducer";
import {clearMessages} from "../src/reducers/groupMessgeReducer";

export const Header: FC = () => {

    const isAuth = useSelector((state: any) => state.users.isAuth)
    const currentUser = useSelector((state: any) => state.users.currentUser)

    const dispatch = useDispatch()

    const navigation = useNavigation();

    return (
        <Container>
            <Row justify='space-between'>

                <IconButton
                    onPress={() => { navigation.navigate('Home'); }}
                    icon="home"
                    iconColor="#000"
                    size={20}
                />

                {
                    isAuth ?
                        <>
                            <Text
                                onPress={() => {
                                    navigation.navigate('Registration');
                                }}>{currentUser.email}</Text>

                            <IconButton
                                onPress={() => {
                                    dispatch(clearGroups())
                                    dispatch(clearFiles())
                                    dispatch(clearMessages())
                                    dispatch(logout())
                                }}
                                icon="logout"
                                iconColor="#000"
                                size={20}
                            />
                        </>
                    :
                        <IconButton
                            onPress={() => {
                                navigation.navigate('Auth');
                            }}
                            icon="login"
                            iconColor="#000"
                            size={20}
                        />
                }

            </Row>
        </Container>
    );
};




const Container = styled.View`
  padding: 5px;
  background: #4b586d;
  color: #ccc;
`;

const Text = styled.Text`
  color: #eee;
`;

const Image = styled.Image`
  height: 20px;
  width: 20px;
`;

