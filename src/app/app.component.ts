import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TmService } from './tm.service';
import { TMComponent } from './tm/tm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TMComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TM';

  
}
