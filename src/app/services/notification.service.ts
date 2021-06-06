import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
  isShowNotifApp = { success: true, show: false, msgType: '' };
  notifSubject = new BehaviorSubject<object>(this.isShowNotifApp);
  showNotifSubjet = this.notifSubject.asObservable();
  constructor() {}

  showNotifAlert(msgType: any) {
    this.notifSubject.next({ success: true, show: true, msgType: msgType });
    setTimeout(() => {
      this.notifSubject.next({ success: false, show: false, msgType: msgType });
    }, 10000);
  }
}
