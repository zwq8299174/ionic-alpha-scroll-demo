import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers,URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

const baseUrl = 'http://api.jisuapi.com/car';
const appKey = 'c115b803134d35f2';

@Injectable()
export class AppHttp {
	constructor(private http: Http) {}
	request(url: string, opts: any) {
		// console.log(opts);
		return this.http.request(url, new RequestOptions(opts))
			.map(res => {
				// console.log(res);
				return res.json();
			})
	};
	post(url: string, opts ? : Object) {
			let params = new URLSearchParams();
			params.set('appkey',appKey);
			console.log(params);
			let body = JSON.stringify({
				appkey:appKey
			});
    			let headers = new Headers({ 'Content-Type': 'application/json' });
    			let options = new RequestOptions({
    				body:body,
				headers:headers,
	      		method: 'post'
    			});
			return this.request(baseUrl+url, (<any>Object).assign(options, opts));
	};
	get(url: string, opts ? : Object) {
		// console.log(opts);
		let params = new URLSearchParams();
		params.set('appkey',appKey);
		if(opts!=undefined){
			for(let item in opts){
				params.set(item,opts[item]);
			}
		};
		let body:any = {
			search:params
		}
		// console.log(params);
		return this.request(baseUrl+url,(<any>Object).assign(body,opts));
	};

}
