import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-member-selection',
  templateUrl: './member-selection.component.html',
  styleUrls: ['./member-selection.component.scss']
})
export class MemberSelectionComponent {
  members: string[] = ['123JD','223JH','268GF'];
  selectedMember: string=''; 

entermemberid: string = '';

constructor(private appService: AppService) {
  
}

ngOnInit(): void {

}


refresh(): void{
  this.appService.refreshBenefits();
  console.log('Refresh clicked');
}

}
