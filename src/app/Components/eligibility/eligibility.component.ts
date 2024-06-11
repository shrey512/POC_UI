import { Component } from '@angular/core';
import { AppService } from 'src/app/app.service';

interface Benefits{
  name: string;
  iseligible: boolean;
}

interface Premiums{
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

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.scss']
})
export class EligibilityComponent {

  benefits: Benefits[]=[]
  premiums: Premiums[] = [];
  matches: Match[] = [];

  constructor(private appService: AppService) {
  
  }
  
  ngOnInit(): void {
    this.appService.benefits$.subscribe(benefits =>{
      this.benefits = benefits;
    });
     
    this.appService.matches$.subscribe(matches =>{
      this.matches = matches;
    });

    this.appService.premium$.subscribe(premiums =>{
      this.premiums = premiums;
    });

    // this.benefits = this.getBenefits();
    //this.premiums = this.getPremiums();
    //this.matches = this.getMatch();
  }


}
