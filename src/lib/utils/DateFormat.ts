class DateFormat {
  static getDay = () => new Date().getDate();

  static getMonth = () => new Date().getMonth() + 1;

  static getYeaer = () => new Date().getFullYear();

  static isToday(month: number, day: number) {
    return month === this.getMonth() && day === this.getDay();
  }
}

export default DateFormat;
