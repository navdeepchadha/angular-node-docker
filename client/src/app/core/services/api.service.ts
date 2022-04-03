import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded',
  'Access-Control-Allow-Headers': '*',
});
const options = { headers: headers };

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  login(formDetails: any) {
    let body = this.getUrlDataString(formDetails);
    let url = 'http://localhost:3000/login/';
    return this.http.post(url, body, options);
  }

  getCharacters() {
    let url = 'http://localhost:3000/characters';
    return this.http.get(url, options);
  }

  getUrlDataString(body: any): string {
    let bodyParam: string = '';
    Object.keys(body).forEach((val, index) => {
      bodyParam += val + '=' + encodeURIComponent(body[val]);
      if (index !== Object.keys(body).length - 1) {
        bodyParam += '&';
      }
    });
    return bodyParam;
  }
}
