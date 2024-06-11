import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Benefits{
  name: string;
  iseligible: boolean;
}

interface Match{
  matchvalue: boolean;
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


@Injectable({
  providedIn: 'root'
})

export class AppService {
  private benefitsSubject = new BehaviorSubject<Benefits[]>([]);
  benefits$ = this.benefitsSubject.asObservable();

  private matchSubject = new BehaviorSubject<Match[]>([]);
  matches$ = this.matchSubject.asObservable();

  private premiumSubject = new BehaviorSubject<Premiums[]>([]);
  premium$ = this.premiumSubject.asObservable();
  

  constructor() { }

  getBenefits(): Benefits[]{
    return[
      {name: "Cancer Check for you (Partner)", iseligible: false},
      {name: "Life Assurance (Partner)", iseligible: false},
      {name: "Dental insurance", iseligible: true},
      {name: "Group Income Protection", iseligible: false},
      {name: "Holiday Trading", iseligible: false},
      {name: "Life Assurance", iseligible: false},
      {name: "Pension WPP (Legacy)", iseligible: false}
    ]
  }

  getMatch(): Match[]{
    return[
      {matchvalue: true},
      {matchvalue: true},
      {matchvalue: true},
      {matchvalue: true},
    ]
  }

  getPremiums(): Premiums[]{
    return[
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P", tier: "EE", fromage: "Null" , toage: "Null", premium: "6.61", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base" , proposalrateid:"9820880F-71FC-4650-8C2E-A55E71E49A3A"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+CH", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"1E039EF5-CA5B-4FB1-B692-0BEA4AAD1728"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+FAM", fromage: "Null" , toage: "Null", premium: "19.83", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"6B4AB1B5-7CE9-4E42-96F5-DC4F6CA6CF67"},
      {customproddesc: "Dental Insurance", benefitid: "DEN", plandesc: "Clear 2+", carrierplancode:"HLFLEXDEN2P",  tier: "EE+SP", fromage: "Null" , toage: "Null", premium: "13.22", fromsalary: "Null", tosalary: "Null", employerportion: "0.00", ratecategory: "Base", proposalrateid:"E52BEE10-C4C4-469D-8358-485C305CB2F2"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN5P", planDescription: "Clear 5+", tier: "EE", "FromAge": Null , "ToAge": Null, "premium": "16.32", "FromSalary": Null, "ToSalary": "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"C89E0F80-F11B-4F3B-BFD3-D33A2C1EE89F"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN5P", planDescription: "Clear 5+", tier: "EE+CH", "FromAge": Null , "ToAge": Null, "premium": "32.64", "FromSalary": Null, "ToSalary": "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"DA8678AC-3E26-4871-A584-254249970907"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN5P", planDescription: "Clear 5+", tier: "EE+FAM", "FromAge": Null , "ToAge": Null, "premium": "48.96", "FromSalary": Null, "ToSalary": "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"15EF802F-DC79-46AB-B1B5-41B5D912936B"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN5P", planDescription: "Clear 5+", tier: "EE+SP", "FromAge": Null , "ToAge": Null, "premium": "32.64", "FromSalary": Null, "ToSalary": "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"E36D35C8-8555-4E54-ACF8-5EF9911BB71D"}, 
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN6P", planDescription: "Clear 6+", tier: "EE", "FromAge": Null , "ToAge": Null, "premium": "25.03", "FromSalary": Null, "ToSalary": "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"A98FBBDA-CB73-40A8-A65E-B8B0B788D569"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN6P", planDescription: "Clear 6+", tier: "EE+CH", "FromAge": Null , "ToAge": Null, "premium": "50.06", "FromSalary": Null, ToSalary: "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"1E886CC7-EDD9-4F5C-A128-84A2DB782320"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN6P", planDescription: "Clear 6+", tier: "EE+FAM", "FromAge": Null , "ToAge": Null, "premium": "75.09", "FromSalary": "Null", ToSalary: "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"EF2DA502-701C-42FC-A415-3DB2496ABD4B"},
      //  {customprodDescription: "Dental Insurance", benefitID: "DEN", CarrierPlanCode:"HLFLEXDEN6P", planDescription: "Clear 6+", tier: "EE+SP", "FromAge": Null , "ToAge": Null, "premium": "50.06", "FromSalary": "Null", ToSalary: "Null", EmployerPortion: "0.00", rateCategory: "Base", ProposalRateId:"1117C598-FCF0-4872-A0FF-2BD0868CD917"}
    ]
  }

  refreshBenefits(): void{
    const benefits = this.getBenefits();
    const matches = this.getMatch();
    const premium = this.getPremiums();
    this.benefitsSubject.next(benefits);
    this.matchSubject.next(matches);
    this.premiumSubject.next(premium);
  }
}
