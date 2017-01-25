import { Injectable } from '@angular/core';

//REQUIRED FOR INFO GRAB AND ERROR MSG
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

@Injectable()
export class CustomerService{
	
	//URL for JSON file
	private _url: string = "apidata/customerData.json"
	

	constructor(private _http: Http){}

	//GET or CATCH error
	getCustomer(){
		return this._http.get(this._url)
			.map((response:Response) => response.json())
			.catch(this._errorHandler);
		
	}

	//SEND ERROR
	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}