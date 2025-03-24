import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-elem',
  standalone: true,
  imports: [],
  templateUrl: './elem.component.html',
  styleUrl: './elem.component.scss'
})
export class ElemComponent {
  @Input() pierwiastek: any;
}
