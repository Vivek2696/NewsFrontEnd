import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INews } from '../Models/News';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseUrl = 'http://localhost:3300/api';
  private baseUrl2 = 'http://localhost:3400/api/query';
  allQueries: any[];

  constructor(private _http: HttpClient) {}

  login(credentials: any) {
    let loginUrl = this.baseUrl + '/admin/login';
    return this._http.post(loginUrl, credentials, {withCredentials: true});
  }

  register(credentials: any) {
    let registerUrl = this.baseUrl + '/admin/register';
    return this._http.post(registerUrl, credentials, {withCredentials: true});
  }

  //Needs pagination
  getAllNews(){
    console.log('fetching all news!!');
    let allNewsUrl = this.baseUrl + '/admin/news';
    return this._http.get<INews[]>(allNewsUrl, { withCredentials: true });
  }

  delete(newsId: String){
    let deleteNewsUrl = this.baseUrl + '/admin/news/' + newsId;
    return this._http.delete(deleteNewsUrl, { withCredentials: true });
  }

  editNews(newsId, newsBody: INews){
    let editUrl = this.baseUrl + '/admin/news/' + newsId;
    return this._http.put(editUrl, newsBody, { withCredentials: true });
  }

  addNews(newNews: INews){
    let addUrl = this.baseUrl + '/admin/news/';
    return this._http.post(addUrl, newNews, { withCredentials: true });
  }

  adminLogout(){
    let logoutUrl = this.baseUrl + '/admin/logout';
    return this._http.get(logoutUrl);
  }

  getAllQueries() {
    return this._http.get<any[]>(this.baseUrl2);
    //return this.allFoods;
  }

  removeQuery(index: any) {
    console.log(this.baseUrl2 + '/' + index._id);
    return this._http.delete(this.baseUrl2 + '/' + index._id);
  }

}
