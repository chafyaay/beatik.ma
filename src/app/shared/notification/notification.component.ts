import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notifMsg = '';
  @Input() notifStatus = { success: false };
  @Input() showNotifApp = { success: false, show: false, msgType: 'msg1' };
  constructor() {}

  ngOnInit() {}
}
