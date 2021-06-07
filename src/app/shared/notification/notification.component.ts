import { Component, OnInit, Input } from '@angular/core';
import { RouterService } from '../../services/router.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  @Input() notifMsg = '';
  @Input() notifStatus = { success: false };
  @Input() showNotifApp = { success: false, show: false, msgType: 'msg1' };
  constructor(private routerservice: RouterService) {}

  ngOnInit() {}
  goTocart() {
    this.routerservice.goToUrl(['/cart-details']);
  }
}
