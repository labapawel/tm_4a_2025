import { Component } from '@angular/core';
import { TmService } from '../tm.service';
import { NgFor, NgStyle } from '@angular/common';
import { ElemComponent } from '../elem/elem.component';

@Component({
  selector: 'app-tm',
  standalone: true,
  imports: [NgFor, ElemComponent, NgStyle],
  templateUrl: './tm.component.html',
  styleUrl: './tm.component.scss'
})
export class TMComponent {
  public dane: any[] = [];

  constructor(private tm:TmService) {

    this.tm.subscribe.subscribe(data => {
      this.dane = data;
      console.log(data);
    });

  }
}
