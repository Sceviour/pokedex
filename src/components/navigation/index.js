import React from 'react';
import { Container, Button, Input, Pane } from './styles/navigation';

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Navigation.Button = function NavigationButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Navigation.Input = function NavigationInput({ ...restProps }) {
  return <Input {...restProps} />;
};


Navigation.Pane = function NavigationPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};