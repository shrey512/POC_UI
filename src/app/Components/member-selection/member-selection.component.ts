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

constructor(private appService: AppService) {

}

onSelectMember(member: string): void{
  this.appService.setselectedmember(member);
  console.log('selected member:', member);
}

ngOnInit(): void {

}


refresh(): void{
  if(this.selectedMember == '123JD'){
    this.appService.refreshBenefits();
  console.log('Refresh clicked');
  }
  //temp
  else if(this.selectedMember == '223JH'){
    this.appService.refreshBenefits223JH();
  console.log('Refresh clicked');
  }
  else {
    this.appService.refreshBenefits268();
  console.log('Refresh clicked');
  }
  //
}

}
