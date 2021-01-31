export const getNumberWithComma = (number: number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// hh:mm -> minutes;
export const getMinutes = (time: string) => {
  const [hours, minutes] = time.split(':');
  return Number(hours) * 60 + Number(minutes);
};
