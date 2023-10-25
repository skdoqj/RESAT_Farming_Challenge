export interface MonthType {
  year: number;
  month: number;
  dates: DateType[];
}
export interface DateType {
  date: number;
  day: number;
}
export interface SelectedDate {
  year: number;
  month: number;
  date: number;
}

export interface LocalType {
  key: number;
  year: number;
  month: number;
  date: number;
  memo: MemoType[];
}

export interface MemoType {
  key: number;
  value: string;
}

export interface DatePropsType {
  date: number;
  localList: LocalType[];
  selectedYear: number;
  selectedMonth: number;
}
