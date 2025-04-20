import React from 'react';
import { Button } from './ui/button';

interface OneButtonProps {
  text: string;
  type?: 'submit' | 'reset';
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick: () => void;
  iconLeft?: string;
  iconRight?: string;
  iconFarLeft?: string;
  iconFarRight?: string;
  classname?: string;
}

const Icon = ({
  src,
  alt = 'icon',
  margin = '',
}: {
  src: string;
  alt?: string;
  margin?: string;
}) => <img src={src} alt={alt} className={margin} width={20} height={20} />;

const variants = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-200 text-gray-800',
  danger: 'bg-red-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  info: 'bg-blue-200 text-blue-800',
  light: 'bg-white text-gray-800',
  dark: 'bg-gray-800 text-white',
};
const OneButton = (props: OneButtonProps) => {
  const {
    text,
    type,
    onClick,
    variant = 'primary',
    iconLeft,
    iconRight,
    iconFarLeft,
    iconFarRight,
    classname,
  } = props;
  return (
    <Button
      className={`flex justify-center p-2 rounded-xl w-full cursor-pointer ${classname} ${
        variants[variant]
      }`}
      onClick={onClick}
      type={type}
    >
      {iconFarLeft && <Icon src={iconFarLeft} margin="mr-6" />}
      {iconLeft && <Icon src={iconLeft} margin="mr-2" />}
      <span>{text}</span>
      {iconRight && <Icon src={iconRight} margin="ml-2" />}
      {iconFarRight && <Icon src={iconFarRight} margin="ml-6" />}
    </Button>
  );
};

export default OneButton;
