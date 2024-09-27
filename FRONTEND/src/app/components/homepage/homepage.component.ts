import { Component, OnInit } from '@angular/core';
import { ReviewsComponent } from "../reviews/reviews.component";
import { ReviewServiceService } from '../../review-service.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from '../../booking.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ReviewsComponent, CommonModule, ReactiveFormsModule],
  providers: [ReviewServiceService, BookingService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  bookingForm!: FormGroup;
  reviews: any[] = [];

  constructor(
    private reviewService: ReviewServiceService,  
    private bookingService: BookingService
  ){} 
  
  ngOnInit(): void {
    this.getReviews();
    this.bookingForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl(''),
      date: new FormControl('')
    });
  }

  onSubmit(): void {
    if (this.bookingForm.valid) {
      const formData = this.bookingForm.value;
      this.bookingService.postBookings(formData).subscribe((response: any) => {
        console.log('Form Submitted Successfully', response);
        this.bookingForm.reset();
      }, (error: any) => {
        console.error('Error submitting form', error);
      });
    }
  }


  getReviews(){
    this.reviewService.getReviews().subscribe(
      (response: any[])=> {
        this.reviews = response;
      },
      (error: any) => {
        console.error('Error fetching data', error);  // Handle error
      }
    );
  }

}
