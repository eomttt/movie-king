export interface TimeTable {
  image?: string;
  title: string;
  timeInfo: TimeTableInfo[];
}

interface TimeTableInfo {
  time: string;
  seats?: string;
  wholeSeats?: string;
}
