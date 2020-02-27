import { Injectable } from '@angular/core';
import { DefaultListItem } from "../interfaces/default-list-item.interface";
import { Observable } from "rxjs/index";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetDefaultListService {
  public apiHost = './assets/default/';

  constructor( private http: HttpClient ) { }


getList(fileName: string): Observable<DefaultListItem[]> {
  return this.http.get<DefaultListItem[]>(`${this.apiHost}${fileName}`)
  .pipe(map((items: DefaultListItem[]) => items))
}

}