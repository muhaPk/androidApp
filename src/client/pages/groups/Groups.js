import React from 'react';
import { ScrollView } from "react-native"
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {Container} from "../../ui/Grid/Container";
import {Text} from "../../ui/Grid/Text"
import {Row} from "../../ui/Grid/Row"
import {socket} from "../../libs/socket"

const CustomFloatButton = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 10px;
  width: 10px;
  backgroundcolod: #333;
`;


export const Groups = () => {

    const groups = useSelector(state => state.groups.groups)

    const navigation = useNavigation();

    return (
        <Container as={ScrollView}>

          <Row direction='column'>
            {
              groups?.map(({_id, name, followers_count}, i) => {
                return <Text key={i} onPress={() => {
                  socket.emit('joinToRoom', _id);
                  navigation.navigate('Group', {id: _id});
                }}>{name}</Text>
              })
            }
          </Row>


            <CustomFloatButton onPress={() => {
                navigation.navigate('CreateGroup');
            }}>
            </CustomFloatButton>

        </Container>

    );
}

