import { TheaterType } from 'constants/theater';
import { useGetLocation } from 'hooks/useGetLocation';
import { TheaterInfo } from 'interfaces/theater';
import { THEATERS as cgvTheaters } from 'lib/datum/theaters/cgv';
import { THEATERS as lotteTheaters } from 'lib/datum/theaters/lotte';
import { THEATERS as megaTheaters } from 'lib/datum/theaters/megaBox';
import { useCallback, useEffect, useState } from 'react';

const NEARBY_KM = 3;

export const useNearbyTheaters = () => {
  const position = useGetLocation();
  const [nearByTheaters, setNearByTheaters] = useState<TheaterInfo[]>([]);

  const arePointsNear = useCallback(
    (checkPoint) => {
      const ky = 40000 / 360;
      const kx = Math.cos((Math.PI * position.lat) / 180.0) * ky;
      const dx = Math.abs(position.lng - checkPoint.lng) * kx;
      const dy = Math.abs(position.lat - checkPoint.lat) * ky;
      return Math.sqrt(dx * dx + dy * dy) <= NEARBY_KM;
    },
    [position],
  );

  useEffect(() => {
    if (position) {
      const theaterList = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of cgvTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.CGV,
            });
          }
        }
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of lotteTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.LOTTE,
            });
          }
        }
      }

      // eslint-disable-next-line no-restricted-syntax
      for (const theaters of megaTheaters) {
        // eslint-disable-next-line no-restricted-syntax
        for (const theater of theaters) {
          const { location } = theater;
          if (arePointsNear(location)) {
            theaterList.push({
              ...theater,
              type: TheaterType.MEGABOX,
            });
          }
        }
      }
      setNearByTheaters(theaterList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arePointsNear, position]);

  return nearByTheaters;
};
