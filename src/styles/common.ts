import { css } from '@emotion/core';

export const PCMaxWith = 700;
export const mobileOffSet = 415;

export const boxShadow = '0 1px 10px 0 rgba(164, 164, 164, 0.5)';

export const defaultBorder = '5px';

export const topNavBarHeight = 40;
export const topNavBarZIndex = 5;

export const bottomNavBarHeight = 50;
export const bottomNavBarZIndex = 5;

export const pagesPadding = 10;

export const getTextLineStyle = (line = 1) => css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: ${line};

  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${line};

  word-break: break-all;
  word-wrap: anywhere;
`;
