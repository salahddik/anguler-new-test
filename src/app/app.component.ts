import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./layout/nav/main-header.component";
import { MainFooterComponent } from "./layout/footer/main-footer.component";
import { HttpClientModule } from '@angular/common/http'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainHeaderComponent, MainFooterComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  currentItem = 'hada text jaya men parrent to child component';


  receivedData: string = '';

  receiveData(data: string) {
    this.receivedData = data;
  }
  
}
