import { Component, OnInit, VERSION } from '@angular/core';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  showNotifApp = { success: false, show: false,msgType:'' };
  constructor(private notService: NotificationService) {}
  ngOnInit() {
    this.notService.notifSubject.subscribe((data: any) => {
      console.log(data);
      this.showNotifApp = data;
    });
  }
}
