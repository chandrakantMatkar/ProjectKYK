import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiURL = "http://localhost:5000/api/bookings";

  constructor(private http: HttpClient) { }

  postBookings(formData: any): Observable<any>  {
    return this.http.post(this.apiURL, formData);
  }
}
