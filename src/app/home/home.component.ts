import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  initText: string = "Hello, ";
  fieldText: string = "";

  placeText: string = "Name";
  placeArray = ["City", "Age"]

  texts = ["Are you from ", "Just as a matter os curiosity, how old are you?", "Nice, now I'll lock the button and ask you to take a look around here, thank you for this conversation and have a good time!"];
  textArray = ["Hello, "];

  i = 0;
  constructor() { }

  ngOnInit() {
  }

  jumpLine() {
  	if(this.i == 1){
  		if(this.fieldText != 'Recife') this.fieldText = this.fieldText + "? Oh, nice, I hope it's a good place to live!";
  		if(this.fieldText == 'Recife') this.fieldText = this.fieldText + "? Really?? I'm from Recife too!";
  	}
  	if(this.i == 2){
  		if(parseInt(this.fieldText) < 18) this.fieldText = this.fieldText + "?! Really? Wow, you're too young, this is not a adult site but I was not expecting someone this young in here (neither in a adult site, pls, don't), then I don't know what to recommend you, sorry :c";
  		if(parseInt(this.fieldText) >= 18 && parseInt(this.fieldText) < 30) this.fieldText = this.fieldText + "? Oh, nice, then you must be a student, just like me! I recommend you to take a look in the pessoal section on the abou tab, maybe we can be friends!"; 
  		if(parseInt(this.fieldText) >= 30) this.fieldText = this.fieldText + "? Nice, then you must be a professor or a recruiter, I recommend you to look for my resume in the profissional section on the about tab.";
  	}
  	this.textArray[this.i] = this.textArray[this.i] + " " + this.fieldText;
  	console.log(this.textArray[this.i]);
  	console.log(this.fieldText);
  	this.fieldText = '';
  	console.log(this.i);
  	this.textArray.push(this.texts[this.i]);
  	this.placeText = this.placeArray[this.i]
  	this.i = this.i + 1;
  	if(this.i == 3) 
  		document.getElementById("FormBtn").setAttribute("disabled", "disabled");
  }

}
