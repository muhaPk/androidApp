import React, {FC, ReactNode} from 'react';

import styled from 'styled-components';

export const RowStyled = styled.View`
  
        flex-direction: ${({ direction }) => direction || 'row'};
        align-items: ${({ align }) => align || 'flex-start'};
        justify-content: ${({ justify }) => justify || 'flex-start'};
        
        ${({ mt }) => mt && `marginTop: 10px;`}
        ${({ mt2 }) => mt2 && `marginTop: 15px;`}
        ${({ mt3 }) => mt3 && `marginTop: 20px;`}
        ${({ mt4 }) => mt4 && `marginTop: 25px;`}
        ${({ mt5 }) => mt5 && `marginTop: 30px;`}
        
        ${({ mb }) => mb && `marginBottom: 10px;`}
        ${({ mb2 }) => mb2 && `marginBottom: 15px;`}
        ${({ mb3 }) => mb3 && `marginBottom: 20px;`}
        ${({ mb4 }) => mb4 && `marginBottom: 25px;`}
        ${({ mb5 }) => mb5 && `marginBottom: 30px;`}
`;

type Props = {
  children? : ReactNode,
  direction?: string,
  align?: string,
  justify?: string,

  // noWrap?: boolean,
  // inline?: boolean,
  // pointer?: boolean,
  // fullWidth?: boolean,
  // hide?: boolean,

  mb?: boolean,
  mb2?: boolean,
  mb3?: boolean,
  mb4?: boolean,
  mb5?: boolean,
  mt?: boolean,
  mt2?: boolean,
  mt3?: boolean,
  mt4?: boolean,
  mt5?: boolean,
}

// @ts-ignore
export const Row: FC<Props> = ({

  children,
  direction,
  align,
  justify,

  // noWrap,
  // inline,
  // pointer,
  // fullWidth,
  // hide,

  mb,
  mb2,
  mb3,
  mb4,
  mb5,
  mt,
  mt2,
  mt3,
  mt4,
  mt5,
  ...rest
    }: Props) => {

    return (
        <RowStyled
            direction={direction}
            align={align}
            justify={justify}

            // noWrap={noWrap}
            // inline={inline}
            // pointer={pointer}
            // fullWidth={fullWidth}
            // hide={hide}

            mb={mb}
            mb2={mb2}
            mb3={mb3}
            mb4={mb4}
            mb5={mb5}
            mt={mt}
            mt2={mt2}
            mt3={mt3}
            mt4={mt4}
            mt5={mt5}
            {...rest}
            >
            {children}
        </RowStyled>
    );
};
