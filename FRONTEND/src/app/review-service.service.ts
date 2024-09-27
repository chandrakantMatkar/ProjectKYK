import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewServiceService {
  private apiURL = "http://localhost:5000/api/reviews";

  constructor(private http: HttpClient) { }

  getReviews(): any{
    return this.http.get(this.apiURL);
  }

  postBookings(formData: any): Observable<any>  {
    return this.http.post(this.apiURL, formData);
  }

}
