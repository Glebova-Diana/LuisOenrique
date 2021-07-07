import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {

  config = {
    loop: true,
    speed: 300,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  };


  constructor() { }

  ngOnInit() {
  }

}
