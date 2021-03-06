import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'customer-list',
  templateUrl: './customerList.component.html'
})
export class CustomerListComponent implements OnInit  { 

	//STRING to hold error message
	errorMsg: string;
	
	//arrayhold
	getData: any;
	postData: any;
	
	//STRING to hold error message
	public customerId;
	
	constructor(private _customerService: CustomerService, private route: ActivatedRoute, private router: Router){
	}
	
	
	//INIT that subscribes to collect JSON info
		ngOnInit(){
			this._customerService.getCustomer()
				.subscribe(resCustomerData => this.getData = resCustomerData,
									resCustomerError => this.errorMsg = resCustomerError);
			
			/*this.route.params.subscribe((params: Params)=> {
				let id = parseInt(params['id']);
				this.customerId = id;
				console.log("ID"+ this.customerId);
			})*/
		}
	onPlost(name: string){
		this._customerService.postCustomer(name)
			.subscribe(resCustomerData => this.postData.push(resCustomerData),
									resCustomerError => this.errorMsg = resCustomerError,
								()=>console.log("this one calls"));
	}
	//LINK TO EDIT PAGE FOR EACH CUSTOMER
	onSelect(customer){
				this.router.navigate([customer.id], {relativeTo: this.route});
	}
}
