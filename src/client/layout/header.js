import React, {useEffect} from 'react';

import styled from 'styled-components/native';

import { useNavigation } from '@react-navigation/native';

import { Row } from '../ui/Grid/Row';
import { IconButton } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../src/reducers/userReducer";
import {resetGroups} from "../src/reducers/groupReducer";
import {resetFiles} from "../src/reducers/fileReducer";

export const Header = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.currentUser)

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
                                    dispatch(resetGroups())
                                    dispatch(resetFiles())
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

