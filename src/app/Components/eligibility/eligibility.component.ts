import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

//interfaces
interface Benefits{
  name: string;
  iseligible: boolean;
}

interface PremiumsL{
  customproddesc: string;
  benefitid: string;
  plandesc: string;
  carrierplancode: string;
  tier: string;
  fromage: string;
  toage: string;
  premium: string;
  fromsalary: string;
  tosalary: string;
  employerportion: string;
  ratecategory: string;
  proposalrateid: string;
}

interface PremiumsN{
  customproddesc: string;
  benefitid: string;
  plandesc: string;
  carrierplancode: string;
  tier: string;
  fromage: string;
  toage: string;
  premium: string;
  fromsalary: string;
  tosalary: string;
  employerportion: string;
  ratecategory: string;
  proposalrateid: string;
}

interface Match{
  matchvalue: boolean;
}
//interfaces: END

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss']
})
export class EligibilityComponent {

  //using service
  benefits: Benefits[]=[]
  premiumsl: PremiumsL[] = [];
  premiumsn: PremiumsN[] = [];
  matches: Match[] = [];

  //temp
  //premiumsn223: PremiumsN[] = [];
  //premiumsn268: PremiumsN[] = [];
  //

  selectedMember: string=''; 
  private subscription: Subscription;
  
  constructor(private appService: AppService) {
    this.subscription = this.appService.selectedMember$.subscribe(member => 
      {this.selectedMember = member;});
  }
  
  ngOnInit(): void {
    this.appService.benefits$.subscribe(benefits =>{
      this.benefits = benefits;
    });

    this.appService.matches$.subscribe(matches =>{
      this.matches = matches;
    });

    this.appService.premiuml$.subscribe(premiumsl =>{
      this.premiumsl = premiumsl;
    });

    this.appService.premiumn$.subscribe(premiumsn =>{
      this.premiumsn = premiumsn;
    });

    //temp
    //this.appService.premiumn$.subscribe(premiumsn223 =>{
    //  this.premiumsn223 = premiumsn223;
    //});
    //this.appService.premiumn$.subscribe(premiumsn268 =>{
    //  this.premiumsn268 = premiumsn268;
    //});
    //
  }

  convertToUppercase(value: boolean):
  string{
    return value.toString().toUpperCase();
  }

}


