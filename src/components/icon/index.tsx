import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../../enums/color';
import { iconPath } from './iconPath';
import { WrapperProps, IconProps } from './type';

const valueChecker = (value: number | string) => (
  typeof value === 'number' ? `${value}px` : value
);

const Wrapper = styled.svg<WrapperProps>`
  fill: ${({ customColor }) => customColor};

  ${({ customSize, customWidth, customHeight }) => (
    (customSize && !customWidth && !customHeight) && css`
      width: ${valueChecker(customSize)};
      height: ${valueChecker(customSize)};
    `
  )}

  ${({ customWidth, customHeight }) => (
    (customWidth && !customHeight) && css`
      width: ${valueChecker(customWidth)};
      height: ${valueChecker(customWidth)};
    `
  )}

  ${({ customHeight, customWidth }) => (
    (customHeight && !customWidth) && css`
      width: ${valueChecker(customHeight)};
      height: ${valueChecker(customHeight)};
    `
  )}

  ${({ customWidth, customHeight }) => (
    (customWidth && customHeight) && css`
      width: ${valueChecker(customWidth)};
      height: ${valueChecker(customHeight)};
    `
  )}
`;

export const Icon: React.FC<IconProps> = (props) => {
  const {
    color: customColor,
    name,
    size: customSize,
    attachLink,
    className,
    width: customWidth,
    height: customHeight,
  } = props;

  const SVGIcon = (
    <Wrapper
      style={{
        display: 'inline-block',
        verticalAlign: 'middle',
      }}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      customSize={customSize}
      customColor={customColor}
      className={className}
      customWidth={customWidth}
      customHeight={customHeight}
    >
      {
        // @ts-ignore
        iconPath[name]
      }
    </Wrapper>
  );

  if (attachLink) {
    return (
      <a
        href={props.attachLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        {SVGIcon}
      </a>
    );
  }

  return SVGIcon;
};

Icon.defaultProps = {
  color: Color.MINE_SHAFT,
  size: 16,
};