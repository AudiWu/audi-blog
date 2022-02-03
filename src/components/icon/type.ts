import { iconPath } from './iconPath';

type IconName = keyof typeof iconPath;

export type WrapperProps = {
  customSize?: number | string;
  customWidth?: number | string;
  customHeight?: number | string;
  customColor?: string;
};

export type IconProps = {
  attachLink?: string;
  color?: string;
  name: IconName | string;
  onClick?: any;
  size?: number | string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

