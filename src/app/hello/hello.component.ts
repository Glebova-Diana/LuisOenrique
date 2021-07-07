import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  form: FormGroup;

  constructor() {
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("myBtn").classList.add('button-arrow--active');
      } else {
        document.getElementById("myBtn").classList.remove('button-arrow--active');
      }
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      text: new FormControl('')
    });
  }

  onSubmit() {
    console.log('Submited!', this.form);
    this.form.reset();
  }
}
