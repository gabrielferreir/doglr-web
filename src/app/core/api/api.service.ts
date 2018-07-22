import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(public _http: HttpClient) {
  }

  request(method, url, options) {
    // console.log('method', method);
    // console.log('url', url);
    // console.log('options', options);

    const headersParams = this.generateHeaders({
      'Content-Type': 'application/json',
      ...options.headers
    });

    const httpOptions = {
      headers: headersParams,
      body: options.body
    };

    const request = new HttpRequest(method, url, httpOptions.body, httpOptions);
    return <any>this._http.request(request);

  }

  generateHeaders(headers) {
    let newHeaders = new HttpHeaders();
    const keys = Object.keys(headers);
    keys.map(key => {
      newHeaders = newHeaders.set(key, headers[key]);
    });
    return newHeaders;
  }

}
