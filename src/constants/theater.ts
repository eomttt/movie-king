// eslint-disable-next-line no-shadow
export enum TheaterType {
  CGV = 'cgv',
  LOTTE = 'lotte',
  MEGABOX = 'megaBox',
}

export const TheaterUrl = {
  [TheaterType.CGV]: 'https://www.cgv.co.kr',
  [TheaterType.LOTTE]: 'https://www.lottecinema.co.kr',
  [TheaterType.MEGABOX]: 'https://www.megabox.co.kr',
};
