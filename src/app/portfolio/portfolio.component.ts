import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  imageArray = [
    {
      src: "../../assets/img/1-portf.jpg",
      alt: "portfolio image 1"
    },
    {
      src: "../../assets/img/2-portf.jpg",
      alt: "portfolio image 2"
    },
    {
      src: "../../assets/img/3-portf.jpg",
      alt: "portfolio image 3"
    },
    {
      src: "../../assets/img/4-portf.jpg",
      alt: "portfolio image 4"
    },
    {
      src: "../../assets/img/5-portf.jpg",
      alt: "portfolio image 5"
    },
    {
      src: "../../assets/img/6-portf.jpg",
      alt: "portfolio image 6"
    },
    {
      src: "../../assets/img/7-portf.jpg",
      alt: "portfolio image 7"
    },
    {
      src: "../../assets/img/8-portf.jpg",
      alt: "portfolio image 8"
    },
    {
      src: "../../assets/img/9-portf.jpg",
      alt: "portfolio image 9"
    },
    {
      src: "../../assets/img/10-portf.jpg",
      alt: "portfolio image 10"
    },
    {
      src: "../../assets/img/11-portf.jpg",
      alt: "portfolio image 11"
    },
    {
      src: "../../assets/img/12-portf.jpg",
      alt: "portfolio image 12"
    }
  ];

  visibleImgArray = [];

  constructor() {
    this.visibleImgArray = this.visibleImgArray.concat(this.imageArray.slice(0, 6));
  }

  ngOnInit() {
  }

  loadMore() {
    this.visibleImgArray = this.visibleImgArray.concat(this.imageArray.slice(this.visibleImgArray.length, this.visibleImgArray.length + 6));
  }

}
