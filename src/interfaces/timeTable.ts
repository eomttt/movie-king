export interface ITimeTableData {
  timeTable: ITimeTable[];
}

export interface ITimeTable {
  title: string;
  timeInfo: ITimeInfo[];
}

export interface ITimeInfo {
  time: string;
}