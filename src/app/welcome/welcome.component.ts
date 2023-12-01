import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  @ViewChild('name') namekey!: ElementRef

  ngOninit(): void {

  }
  startQuiz() {
    localStorage.setItem("name", this.namekey.nativeElement.value)
  }

}
