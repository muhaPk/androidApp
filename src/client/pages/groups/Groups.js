import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {CustomFloatButton} from "../../ui/CustomFloatButton";
import {Container} from "../../ui/Grid/Container";
import {Text} from "../../ui/Grid/Text"


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

