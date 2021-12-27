import styled from 'styled-components';
import { ButtonProps, ButtonSize, ButtonVariant } from './Button.interface';

export const baseButtonClass =
  'inline-flex justify-between items-center border font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';

export const buttonVariantStyle: { [key in ButtonVariant]: string } = {
  [ButtonVariant.primary]:
    'border-transparent text-structural-0 bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
  [ButtonVariant.secondary]:
    'border-transparent text-primary-700 bg-primary-100 hover:bg-primary-200 focus:ring-primary-500',
  [ButtonVariant.tertiary]:
    'border-structural-300 text-structural-700 bg-structural-0 hover:bg-structural-50 focus:ring-primary-500',
  [ButtonVariant.destructive]:
    'border-transparent text-danger-700 bg-danger-100 hover:bg-danger-200 focus:ring-danger-700',
};

export const buttonVariantsDisabledStyle: { [key in ButtonVariant]: string } = {
  [ButtonVariant.primary]:
    'border-transparent bg-structural-100 text-structural-500 cursor-not-allowed',
  [ButtonVariant.secondary]:
    'border-transparent bg-primary-50 text-primary-400 cursor-not-allowed',
  [ButtonVariant.tertiary]:
    'bg-structural-100 border-structural-300 text-structural-400 cursor-not-allowed',
  [ButtonVariant.destructive]:
    'border-transparent bg-danger-50 text-danger-400 cursor-not-allowed',
};

const buttonSizeStyle: { [key in ButtonSize]: string } = {
  [ButtonSize.sm]: 'px-3 py-2 text-sm leading-4',
  [ButtonSize.base]: 'px-4 py-2 text-sm',
  [ButtonSize.lg]: 'px-4 py-2 text-base',
};

const iconButtonSizeStyle: { [key in ButtonSize]: string } = {
  [ButtonSize.sm]: 'px-2 py-2 text-sm',
  [ButtonSize.base]: 'px-2 py-2 text-sm',
  [ButtonSize.lg]: 'px-2 py-2 text-base',
};

interface ButtonStylesProps extends ButtonProps {
  icon?: any;
}

export const Button = styled.button.attrs<Required<ButtonStylesProps>>(
  ({ icon, variant, size, disabled, fullWidth }) => ({
    className: `${baseButtonClass} ${
      disabled
        ? buttonVariantsDisabledStyle[variant]
        : buttonVariantStyle[variant]
    } ${
      icon === undefined ? buttonSizeStyle[size] : iconButtonSizeStyle[size]
    } ${fullWidth && 'w-full'}`,
  }),
)<ButtonStylesProps>``;

export const trailingIconStyle: { [key in ButtonSize]: string } = {
  [ButtonSize.sm]: 'ml-2 -mr-1',
  [ButtonSize.base]: 'ml-3 -mr-1',
  [ButtonSize.lg]: 'ml-3 -mr-1',
};

export const leadingIconStyle: { [key in ButtonSize]: string } = {
  [ButtonSize.sm]: '-ml-1 mr-2',
  [ButtonSize.base]: '-ml-1 mr-3',
  [ButtonSize.lg]: '-ml-1 mr-3',
};
