import { Injectable } from '@angular/core';
import { DefaultListItem } from '../interfaces/default-list-item.interface';
import { Message } from '../interfaces/message.interface';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CommonCRUDService {

  constructor( private http: HttpClient ) { }
  
  //To get all list
  fetch(category: string): Observable<DefaultListItem[]>{
    return this.http.get<DefaultListItem[]>(`/api${category}`)
  }

  //To get just one item (for editing or removing)
  getById(id: string, category: string):  Observable<DefaultListItem> {
    return this.http.get<DefaultListItem>(`/api${category}/${id}`)
  }

  create(category: string, name?: string, transcription?: string, translation?: string): Observable<DefaultListItem> {
    const fd = {name, transcription, translation};

    return this.http.post<DefaultListItem>(`/api${category}`, fd)
  }

  createCollection(category: string, collection: DefaultListItem[]): Observable<DefaultListItem[]> {

    return this.http.post<DefaultListItem[]>(`/api${category}`, collection)
  }

  update(category: string, id: string, name: string, translation: string, transcription?: string, removable?: boolean): Observable<DefaultListItem> {
    const fd = {name, transcription, translation, removable};

    return this.http.patch<DefaultListItem>(`/api${category}/${id}`, fd)
  }

  delete(category: string, id: string): Observable<Message> {
    return this.http.delete<Message>(`/api${category}/${id}`)
  }
}
