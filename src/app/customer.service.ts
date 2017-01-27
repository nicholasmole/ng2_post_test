import { Injectable } from '@angular/core';

//REQUIRED FOR INFO GRAB AND ERROR MSG
import { RequestOptions, Http, Response, Headers, RequestMethod, Request } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import  'rxjs/Rx';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

@Injectable()
export class CustomerService{
	
	//URL for JSON file
	private _url: string = "./apiData/customerData.json";
	private _url2: string = "./apiData/custFile.php";
	
	public user = [];

	constructor(private _http: Http){}

	//GET or CATCH error
	getCustomer(){
		return this._http.get(this._url)
			.map((response:Response) => response.json())
			.catch(this._errorHandler);
		
	}

		postCustomer(bodyz:string){
			//
			let food = {name: 'name'};
			let food2 = "name";
			//let food = "name="+"name";
			//let headers = new Headers({ 'Content-Type': 'application/json' });
			let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
			let options = new RequestOptions({ headers: headers });
			let body = food;
			//let body = JSON.stringify(food);
			 console.log(JSON.stringify(food));
			// console.log(JSON.parse(food))
			//let body = JSON.stringify(food);
			return this._http.post(this._url2, body, headers)
				.map((res: Response) => res.json())
				.catch(this._errorHandler);
		}
		

	//SEND ERROR
	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}