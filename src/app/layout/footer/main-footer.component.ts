import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.css'
})
export class MainFooterComponent {
  @Output() dataEmitter: EventEmitter<string> = new EventEmitter();

  sendData() {
    const dataToSend = "had text jay men footer component to parrent";
    this.dataEmitter.emit(dataToSend);
  }
}
