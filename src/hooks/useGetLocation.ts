import { useEffect, useState } from 'react';

export const useGetLocation = () => {
  const [nowPosition, setNowPosition] = useState(null);

  useEffect(() => {
    if (process.env.API_ENV === 'production') {
      if (navigator.geolocation) {
        console.log('Get location');
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log('Location', position);
            const { coords } = position;
            const { latitude, longitude } = coords;
            setNowPosition({
              lat: latitude,
              lng: longitude,
            });
          },
          error => {
            if (error.code === 1) {
              alert('위치 정보를 가져 올 수 있도록 허용해주세요.');
            }
            alert(error.message);
          },
        );
      } else {
        alert('위치 정보를 지원하지 않습니다.');
      }
    } else {
      // Default Seoul city hall
      setNowPosition({
        lat: 37.4814945,
        lng: 127.0048705,
      });
    }
  }, []);

  return nowPosition;
};
