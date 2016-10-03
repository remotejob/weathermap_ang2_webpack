import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpIpService {

private _ipUrl:string = "http://jsonip.com";
// private _getWeather:string = "http://localhost:8000/api/weather"
   private _getWeather:string = "/api/weather"
    constructor(private _http: Http){ }

   getEmailRestful(){
    //    let headers = new Headers({ "ipservice": "ipservice" });
       let options = new RequestOptions({ method: "get" });
 
        return this._http.get(this._ipUrl,options).map(res => res.json());
    }

   getWeatherRestful(value: any){
       let headers = new Headers({ "ip":  value.ip});
       console.log("getWeatherRestful ip",value.ip)  
       let options = new RequestOptions({headers: headers, method: "get" });
 
        return this._http.get(this._getWeather,options).map(res => res.json());
    }  


  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}