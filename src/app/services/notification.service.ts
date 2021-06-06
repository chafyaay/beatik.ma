import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class NotificationService {
  isShowNotifApp = { success: true, show: false, msgType: '' };
  notifSubject = new BehaviorSubject<object>(this.isShowNotifApp);
  showNotifSubjet = this.notifSubject.asObservable();
  constructor() {}

  showNotifAlert(obj: any) {
    this.notifSubject.next({ success: false, show: true, msgType: 'success' });
    setTimeout(() => {
      this.notifSubject.next({ success: true, show: false, msgType: 'fail' });
    }, 2000);
  }
}
