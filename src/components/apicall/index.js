import React from 'react';
import { Container, Picture, Pane, Text } from './styles/apicall';

export default function APICall({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

APICall.Picture = function HeaderPicture({ ...restProps }) {
  return <Picture {...restProps} />;
};

APICall.Pane = function HeaderPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

APICall.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};