import {Injectable} from '@angular/core';
import {LocalStorageService} from 'ngx-localstorage';
import {TimeBasedDataStorage} from '../../models/pojos/time-based-data-storage';
import {AppUtil} from '../utils/app-util';

@Injectable()
export class DataStorageService {
  constructor(private storageService: LocalStorageService) {

  }

  public saveData(storageData: any, storageKey: string) {
    if (storageData) {
      this.storageService.set(storageKey, storageData);
    }
  }
  public restoreData<T>(storageKey: string): T {
    const data = this.storageService.get(storageKey);
    if (data) {
      return JSON.parse(data, AppUtil.dateTimeReviver);
    }
    return null;
  }
  public deleteData(storageKey: string) {
    this.storageService.remove(storageKey);
  }
  public saveTimeBasedStorageData<T>(storageData: T, storageKey: string) {
    if(storageData) {
      const timeInMillis = (new Date()).getTime();
      const packagedData: TimeBasedDataStorage<T> = {timeSaved: timeInMillis, data: storageData}
      this.storageService.set(storageKey, JSON.stringify(packagedData));
    }
  }

  public getTimeBasedStoreData<T>(storageKey: string, dataElapsedTimeInMins: number): T {
    const data: string = this.storageService.get(storageKey);
    if (data) {
      const storedData: TimeBasedDataStorage<T> = JSON.parse(data);
      const timeSaved = storedData.timeSaved;
      const elapsedTimeInMin = ((new Date().getTime()) - timeSaved) / (1000 * 60);
      if (elapsedTimeInMin < dataElapsedTimeInMins) {
         return storedData.data;
      } else {
        this.storageService.remove(storageKey);
        return null;
      }
    } else {
      return null;
    }
  }
}
