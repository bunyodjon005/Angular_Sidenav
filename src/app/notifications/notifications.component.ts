import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  @Input('texts1') dogbred!:string;
  @Input('texts2')  ShibaInu!:string;
  @Input('texts3') thiscard!:string;
  @Input('texts4') longText!:string
}
