import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Interfaces
interface Benefits{
  name: string;
  iseligible: boolean;
}

interface Match{
  matchvalue: boolean;
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
//interfaces: END

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private benefitsSubject = new BehaviorSubject<Benefits[]>([]);
  benefits$ = this.benefitsSubject.asObservable();
  private matchSubject = new BehaviorSubject<Match[]>([]);
  matches$ = this.matchSubject.asObservable();
  private premiumlSubject = new BehaviorSubject<PremiumsL[]>([]);
  premiuml$ = this.premiumlSubject.asObservable();
  private premiumnSubject = new BehaviorSubject<PremiumsN[]>([]);
  premiumn$ = this.premiumnSubject.asObservable();

  //selectedMember: string=''; 
  private selectedmemberSource = new BehaviorSubject<string>('');
  selectedMember$ = this.selectedmemberSource.asObservable();

  constructor() { }

  setselectedmember(member: string):void{
    this.selectedmemberSource.next(member);
  }

  getBenefits(): Benefits[]{
    return[
      {name: "Cancer Check For You (Partner)", iseligible: false},
      {name: "Life Assurance (Partner)", iseligible: false},
      {name: "Dental Insurance", iseligible: true},
      {name: "Group Income Protection", iseligible: false},
      {name: "Holiday Trading", iseligible: false},
      {name: "Life Assurance", iseligible: false},
      {name: "Pension WPP (Legacy)", iseligible: false},
      {name: "Give As You Earn", iseligible: false}
    ]
  }

  // getMatch(): Match[]{
  //   return[
  //     {matchvalue: true},
  //     {matchvalue: true},
  //     {matchvalue: true},
  //     {matchvalue: true},
  //   ]
  // }

  getcompareMatch(): Match[]{
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN();
    const premiumLvalue = premiuml.map(p=> p.premium);
    const premiumNvalue = premiumn.map(p=> p.premium);
    return premiumLvalue.map(premiumLvalue => ({
        matchvalue: premiumNvalue.includes(premiumLvalue)
      }));  
  }

excludeproposalrateidL(obj: PremiumsL): Omit<PremiumsL, 'proposalrateid'>{
  const {proposalrateid, ...rest} = obj;
  return rest;
}

excludeproposalrateidN(obj: PremiumsN): Omit<PremiumsN, 'proposalrateid'>{
  const {proposalrateid, ...rest} = obj;
  return rest;
}

  getcompareMatchnew(): Match[]{
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN();
    return premiuml.map(premiumlitem => ({
        matchvalue: premiumn.some(premiumnitem => {
          const restL = this.excludeproposalrateidL(premiumlitem);
          const restN = this.excludeproposalrateidN(premiumnitem);
          return JSON.stringify(restL) === JSON.stringify(restN);
        })
      }));  
  }

  getPremiumsL(): PremiumsL[]{
    return[
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P", tier: "EE", fromage: "Null" , toage: "Null", premium: "6.61", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base" , proposalrateid:"9820880F-71FC-4650-8C2E-A55E71E49A3A"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+CH", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"1E039EF5-CA5B-4FB1-B692-0BEA4AAD1728"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "19.83", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"6B4AB1B5-7CE9-4E42-96F5-DC4F6CA6CF67"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+SP", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"E52BEE10-C4C4-469D-8358-485C305CB2F2"},
    ]
  }

  getPremiumsN(): PremiumsN[]{
    return[
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P", tier: "EE", fromage: "Null" , toage: "Null", premium: "6.61", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base" , proposalrateid:"9820880F-71FC-4650-8C2E-A55E71E49A3A"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+CH", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"1E039EF5-CA5B-4FB1-B692-0BEA4AAD1728"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "18.99", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"6B4AB1B5-7CE9-4E42-96F5-DC4F6CA6CF67"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+SP", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"E52BEE10-C4C4-469D-8358-485C305CB2F2"},
    ]
  }

  //temp
  getPremiumsN223(): PremiumsN[]{
    return[
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P", tier: "EE", fromage: "Null" , toage: "Null", premium: "6.51", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base" , proposalrateid:"9820880F-71FC-4650-8C2E-A55E71E49A3A"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"1E039EF5-CA5B-4FB1-B692-0BEA4AAD1728"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "12.83", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"6B4AB1B5-7CE9-4E42-96F5-DC4F6CA6CF67"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+SP", fromage: "Null" , toage: "Null", premium: "33.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"E52BEE10-C4C4-469D-8358-485C305CB2F2"},
    ]
  }
  getPremiumsN268(): PremiumsN[]{
    return[
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P", tier: "EE", fromage: "Null" , toage: "Null", premium: "6.61", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base" , proposalrateid:"9820880F-71FC-4650-8C2E-A55E71E49A3A"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+CH", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"1E039EF5-CA5B-4FB1-B692-0BEA4AAD1728"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "19.83", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"6B4AB1B5-7CE9-4E42-96F5-DC4F6CA6CF67"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+SP", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"E52BEE10-C4C4-469D-8358-485C305CB2F2"},
    ]
  }
  getcompareMatch223(): Match[]{
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN223();
    return premiuml.map(premiumlitem => ({
        matchvalue: premiumn.some(premiumnitem => {
          const restL = this.excludeproposalrateidL(premiumlitem);
          const restN = this.excludeproposalrateidN(premiumnitem);
          return JSON.stringify(restL) === JSON.stringify(restN);
        })
      }));  
  }
  getcompareMatch268(): Match[]{
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN268();
    return premiuml.map(premiumlitem => ({
        matchvalue: premiumn.some(premiumnitem => {
          const restL = this.excludeproposalrateidL(premiumlitem);
          const restN = this.excludeproposalrateidN(premiumnitem);
          return JSON.stringify(restL) === JSON.stringify(restN);
        })
      }));  
  }
  //////


  refreshBenefits(): void{
    const benefits = this.getBenefits();
    const matches = this.getcompareMatchnew();
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN();
    this.benefitsSubject.next(benefits);
    this.matchSubject.next(matches);
    this.premiumlSubject.next(premiuml);
    this.premiumnSubject.next(premiumn);
  }

  //temp
  refreshBenefits223JH(): void{
    const benefits = this.getBenefits();
    const matches = this.getcompareMatch223();
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN223();
    this.benefitsSubject.next(benefits);
    this.matchSubject.next(matches);
    this.premiumlSubject.next(premiuml);
    this.premiumnSubject.next(premiumn);
  }
  refreshBenefits268(): void{
    const benefits = this.getBenefits();
    const matches = this.getcompareMatch268();
    const premiuml = this.getPremiumsL();
    const premiumn = this.getPremiumsN268();
    this.benefitsSubject.next(benefits);
    this.matchSubject.next(matches);
    this.premiumlSubject.next(premiuml);
    this.premiumnSubject.next(premiumn);
  }
  ////////
}
