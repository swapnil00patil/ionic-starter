import { Injectable } from '@angular/core';

import { HTTP } from '@ionic-native/http';

import { HttpClient } from '@angular/common/http';

import 'rxjs/add/observable/fromPromise';
import { Observable } from "rxjs/Observable";

import { API_SERVER_URL } from "../constants/app-config"

@Injectable()
export class ApiService {

	constructor(private http: HTTP, private httpBrowser: HttpClient) {

	}
	
	get(url: string) {
		return window.location.href.includes('localhost') ? 
		this.httpBrowser.get(API_SERVER_URL.LOCAL + url + '.json') : 
		Observable.fromPromise(this.http.get(API_SERVER_URL.PRODUCTION + url, {}, {}));
	}

	post(url: string, body) {
		return window.location.href.includes('localhost') ? 
		this.httpBrowser.post(API_SERVER_URL.LOCAL + url + '.json', body) : 
		Observable.fromPromise(this.http.post(API_SERVER_URL.PRODUCTION + url, {}, {}));
	}
		
} 