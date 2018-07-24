import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
	slideIndex = 1;
	showDivs(slideIndex);	

	showDivs(n) {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    
	    if (n > x.length) {this.slideIndex = 1} 
	    if (n < 1) {this.slideIndex = x.length} ;
	    for (i = 0; i < x.length; i++) {
	        (x[i] as HTMLElement).style.display = "none"; 
	    }
	    (x[this.slideIndex-1] as HTMLElement).style.display = "block"; 
	}
	plusDivs(n) {
	    this.showDivs(this.slideIndex += n);
	}
}
