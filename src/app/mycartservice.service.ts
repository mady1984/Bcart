import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const URL=environment.Apiurl;

@Injectable({
  providedIn: 'root'
})
export class MycartserviceService {

  constructor(private http : HttpClient) { }

  Getcarthomeimg():Observable<any>
  {
    return this.http.get(URL);
  }
}
