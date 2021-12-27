import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  Default,
  Destructive,
  LeadingIcon,
  OnlyIcon,
  Primary,
  Secondary,
  Tertiary,
  TrailingIcon,
} from './Button.stories';

describe('components/Button', () => {
  const onClick = jest.fn();

  const initializeComponent = () => render(<Default onClick={onClick} />);

  it('should render default button', () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });

  it('should render primary button', () => {
    const { container } = render(<Primary />);
    expect(container).toMatchSnapshot();
  });

  it('should render secondary button', () => {
    const { container } = render(<Secondary />);
    expect(container).toMatchSnapshot();
  });

  it('should render tertiary button', () => {
    const { container } = render(<Tertiary />);
    expect(container).toMatchSnapshot();
  });

  it('should render destructive button', () => {
    const { container } = render(<Destructive />);
    expect(container).toMatchSnapshot();
  });

  it('should render button with leading icon', () => {
    const { container } = render(<LeadingIcon />);
    expect(container).toMatchSnapshot();
  });

  it('should render button with trailing icon', () => {
    const { container } = render(<TrailingIcon />);
    expect(container).toMatchSnapshot();
  });

  it('should render button with icon only', () => {
    const { container } = render(<OnlyIcon />);
    expect(container).toMatchSnapshot();
  });

  it('should call onClick on button click', async () => {
    const { getByTestId } = initializeComponent();

    const button = getByTestId('button') as HTMLInputElement;
    userEvent.click(button);

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
