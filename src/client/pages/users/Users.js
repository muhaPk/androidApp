import React from 'react';

import styled from 'styled-components/native';

export const Users = () => {


    return (
        <Container>
            <Text>Users page</Text>
        </Container>

    );
}

const Container = styled.View`
  background: #354052;
  height: 100%;
`;
const Text = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #eee;
`;