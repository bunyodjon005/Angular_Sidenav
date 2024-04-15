import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

  toggleSidebar(){
this.sidebarVisible=!this.sidebarVisible
this.toggles.emit(!this.Expend1);

  }
  
  sidebarVisible: boolean = true;

@Input() Expend1:boolean=false;
@Output()toggles:EventEmitter<boolean>=new EventEmitter<boolean>;
private breakpointObserver = inject(BreakpointObserver);
isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result: { matches: any; }) => result.matches),
      shareReplay()
    );


}
