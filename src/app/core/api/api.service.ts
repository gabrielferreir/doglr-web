import {Injectable} from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
import {catchError, finalize, map} from 'rxjs/internal/operators';
import {throwError} from 'rxjs';

@Injectable()
export class ApiService {

  constructor(public _http: HttpClient) {
  }

  request(method, url, options) {

    const headersParams = this.generateHeaders({
      'Content-Type': 'application/json',
      ...options.headers
    });

    const httpOptions = {
      headers: headersParams,
      body: options.body
    };

    const request = new HttpRequest(method, url, httpOptions.body, httpOptions);
    return {
      subscribe: (sucess?, error?, complete?) => {
        return this._http
          .request(request)
          .pipe(
            map(res => this.response(res, sucess)),
            catchError(res => this.error(res, error)),
            finalize(complete)
          ).subscribe();
      }
    };

  }

  generateHeaders(headers) {
    let newHeaders = new HttpHeaders();
    const keys = Object.keys(headers);
    keys.map(key => {
      newHeaders = newHeaders.set(key, headers[key]);
    });
    return newHeaders;
  }

  response(res, callback) {
    return res.type === HttpEventType.Response ? callback(res.body) : null;
  }

  error(res, callback) {
    console.log(res)
    switch (res.status) {
      case 0:
        console.log('Um de nossos serviços está fora do ar e não foi possível processar sua requisição. Tente novamente mais tarde.');
        break;
      case 400:
        console.log('Requisição inválida. Verifique as informações fornecidas.');
        break;
      case 409:
        console.log(res.error.message);
        break;
      case 500:
        console.log('Ocorreu um erro interno. Já fomos informados do erro. Tente novamente mais tarde.');
    }

    if (callback) {
      callback(res);
    }

    return throwError(res);

  }

}
