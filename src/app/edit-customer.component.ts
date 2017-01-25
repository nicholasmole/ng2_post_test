import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ActivatedRoute,Router, Params } from '@angular/router';
//SHARED INJECTOR
import {CustomerValueService} from './customer-value.service';
import { HEROES }      from './editable.component';


@Component({
  templateUrl: './edit-customer.component.html'
})
export class EditCustomerComponent implements OnInit  { 
	
	
	anotherHero = HEROES;
	//Array That holds the customers value
	customers = [];
	
	//NEW ARRAY FOR SENT CUSTOMERS
	custServ = [];
	
	//Catch Array
	//public ec: clickedCustomer[];
	editCustomer = [];
	//editCustomer = this.clickedCustomer;
	
	//STRING to hold error message
	errorMsg: string;
	
	//STRING to hold error message
	public customerId;
	
	constructor(private _customerService: CustomerService,private route: ActivatedRoute, private router: Router, service: CustomerValueService){
		this.custServ = service.getData();
	}
	
	
	//INIT that subscribes to collect JSON info
		ngOnInit(){
			this._customerService.getCustomer()
				.subscribe(resCustomerData => this.customers = resCustomerData,
									resCustomerError => this.errorMsg = resCustomerError);
			
			this.route.params.subscribe((params: Params)=> {
				let id = parseInt(params['id']);
				this.customerId = id;
				
				console.log("ID"+ this.customerId);
			})
			//editCustomer = this.customers[this.customerId];
		}
	
	//LINK TO EDIT PAGE FOR EACH CUSTOMER
	onSelect(customer){
				this.router.navigate([customer.id], {relativeTo: this.route});
	}
	
	
	//SUBMIT AN EDIT
	submitComment(){
		
	}
	
	
}