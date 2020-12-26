import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {

  public apiUrl = 'http://localhost:9005/';

  constructor() { }
}
