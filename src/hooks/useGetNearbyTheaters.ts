import { TheaterType } from 'constants/theater';
import { useGetLocation } from 'hooks/useGetLocation';
import { TheaterInfo } from 'interfaces/theater';
import { THEATERS as cgvTheaters } from 'lib/datum/theaters/cgv';
import { THEATERS as lotteTheaters } from 'lib/datum/theaters/lotte';
import { THEATERS as megaTheaters } from 'lib/datum/theaters/megaBox';
import { useCallback, useEffect, useState } from 'react';

const NEARBY_KM = 3;

export const useGetNearbyTheaters = () => {
  const position = useGetLocation();
  const [nearByTheaters, setNearByTheaters] = useState<TheaterInfo[]>();

  const arePointsNear = useCallback(
    checkPoint => {
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
      let id = 1;
      const theaterList: TheaterInfo[] = [];

      cgvTheaters.forEach(theaters => {
        theaters.forEach(theater => {
          if (arePointsNear(theater.location)) {
            theaterList.push({
              ...theater,
              id,
              type: TheaterType.CGV,
            });
            id += 1;
          }
        });
      });
      lotteTheaters.forEach(theaters => {
        theaters.forEach(theater => {
          if (arePointsNear(theater.location)) {
            theaterList.push({
              ...theater,
              id,
              type: TheaterType.LOTTE,
            });
            id += 1;
          }
        });
      });
      megaTheaters.forEach(theaters => {
        theaters.forEach(theater => {
          if (arePointsNear(theater.location)) {
            theaterList.push({
              ...theater,
              id,
              type: TheaterType.MEGABOX,
            });
            id += 1;
          }
        });
      });

      setNearByTheaters(theaterList);
    }
  }, [arePointsNear, position]);

  return nearByTheaters;
};
