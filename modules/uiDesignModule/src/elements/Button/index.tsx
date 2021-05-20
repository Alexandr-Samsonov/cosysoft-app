import React, { PropsWithChildren } from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';

const Button = ({
  children, variant = 'contained', color = 'primary', ...props
}: PropsWithChildren<ButtonProps>) => (
  <MuiButton variant={variant} color={color} {...props}>{children}</MuiButton>
);

export default Button;
