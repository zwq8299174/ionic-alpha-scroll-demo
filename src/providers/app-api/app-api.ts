import { Injectable } from '@angular/core';
import { AppHttp } from '../app-http/app-http';


@Injectable()
export class AppApi{
	constructor(private _http: AppHttp) {}
	getBrand(){
		return this._http.get('/brand');
	}
	getSerie(param : any){
		return this._http.get('/type',param);
	}
	getCar(param : any){
		return this._http.get('/car',param);
	}
}
