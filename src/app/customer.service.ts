import { Injectable } from '@angular/core';

//REQUIRED FOR INFO GRAB AND ERROR MSG
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/operator/map';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';

@Injectable()
export class CustomerService{
	
	//URL for JSON file
	private _url: string = "apiData/customerData.json"
	
	public user = [];

	constructor(private _http: Http){}

	//GET or CATCH error
	getCustomer(){
		return this._http.get(this._url)
			.map((response:Response) => response.json())
			.catch(this._errorHandler);
		
	}

	//POST DATA
	postCustomer() {
		this.user = [{ "id": 11, "name": "Andrew2"} ];
		//this.user2 = [ "id": 11, "name": "Andrew2"];
		
	//	var json = JSON.stringify({var1: 'test',var2: 3});
		let jsonw = JSON.stringify({var1: 'test',var2: 3});
		let params = 'json=' + jsonw;
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		//headers.append('Content-Type', this._url);
		
		//return this._http.post(this._url, params,{ headers }) 
		return this._http.post(this._url, params,{ headers }) 
		.map((response:Response) => response.json())
			.catch(this._errorHandler);
	}

	//SEND ERROR
	_errorHandler(error: Response){
		console.error(error);
		return Observable.throw(error || "Server Error");
	}
}