import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {CustomFloatButton} from "../../ui/CustomFloatButton";


export const Groups = () => {

    const groups = useSelector(state => state.groups.groups)

    const navigation = useNavigation();

    return (
        <Container>

            {
                groups?.map(({_id, name, followers_count}, i) => {
                    return <Text key={i} onPress={() => {
                        navigation.navigate('Group', {id: _id});
                    }}>{name}</Text>
                })
            }

            <CustomFloatButton visible={true} onPress={() => {
                navigation.navigate('CreateGroup');
            }} />

        </Container>

    );
}



const Container = styled.View`
  background: #354052;
  height: 100%;
`;
const Text = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #eee;
`;
