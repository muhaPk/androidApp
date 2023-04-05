import React from 'react';

import styled from 'styled-components';
import { Colors } from '../../consts';

const {textColor} = Colors



export const Text = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: ${textColor};
`;
