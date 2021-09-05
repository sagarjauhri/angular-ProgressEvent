import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private _gs: GlobalService) {
    this.getComments();
  }

  public getComments() {
    this._gs.get().subscribe((event: HttpEvent<any>) => {
      // console.log(event.type);
      if (event.type === HttpEventType.Response) {
        const responseData = event.body;
        // console.log(HttpEventType); // do something with the response
      }
    });
  }
}
