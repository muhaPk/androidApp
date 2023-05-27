import React, {FC, ReactNode} from 'react';

import {Dimensions} from 'react-native'
import { Colors } from '../consts';
const fullHeight = Dimensions.get('window').height - 140

// import Meta from '../seo';
import { Footer } from './footer';
import { Header } from './header';

import styled from 'styled-components/native';

type Props = {
  children: ReactNode;
};

export const MainLayout: FC<Props> = ({children}: Props) => {

    return (
        <Container>
            {/*<Meta isAddHireWord />*/}
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};


const Container = styled.View`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  background: ${Colors.backgroundColor};
`;
const Main = styled.View`
  min-height: ${fullHeight}px;
  padding: 5px;
`;
