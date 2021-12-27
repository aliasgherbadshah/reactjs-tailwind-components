import React, { FC } from 'react';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.interface';
import {
  Button as ButtonComponent,
} from './Button.styles';

export const Button: FC<ButtonProps> = ({
  children,
  size = ButtonSize.base,
  disabled = false,
  fullWidth = false,
  variant,
  onClick,
}) => {
  const icon = (!children) || undefined;
  const buttonVariant =
    variant || (icon ? ButtonVariant.tertiary : ButtonVariant.primary);

  return (
    <ButtonComponent
      data-testid="button"
      variant={buttonVariant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      icon={icon}
      onClick={onClick}
    />   
  );
};
