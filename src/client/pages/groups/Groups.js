import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {Container} from "../../ui/Grid/Container";
import {Text} from "../../ui/Grid/Text"
import {Row} from "../../ui/Grid/Row"

const CustomFloatButton = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
  height: 10px;
  width: 10px;
  backgroundcolod: #333;
`;
const Relative = styled.View`
  position: relative;
`;

export const Groups = () => {

    const groups = useSelector(state => state.groups.groups)

    const navigation = useNavigation();

    return (
        <Relative as={Container}>


          <Row direction='column'>
            {
              groups?.map(({_id, name, followers_count}, i) => {
                return <Text key={i} onPress={() => {
                  navigation.navigate('Group', {id: _id});
                }}>{name}</Text>
              })
            }
          </Row>


            <CustomFloatButton onPress={() => {
                navigation.navigate('CreateGroup');
            }}>
            </CustomFloatButton>

        </Relative>

    );
}

