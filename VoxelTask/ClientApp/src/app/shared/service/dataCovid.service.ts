import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataCovidService {

  private headers: any = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Authorization': 'false'
  };

  constructor(
    private http: HttpClient
  ) {}

  /**
   * @name getData()
   * @memberof DataCovidService
   */
  public getData(): Observable<any> {
    return <any>this.http.get("https://corona.lmao.ninja/v2/countries?sort=country", { headers: this.headers });
  }
}