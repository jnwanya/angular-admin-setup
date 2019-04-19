export interface TimeBasedDataStorage<T> {
  data?: T;
  dataArray?: T[];
  timeSaved: number;
}
