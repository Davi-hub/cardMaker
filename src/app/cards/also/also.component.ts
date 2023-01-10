import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-also',
  templateUrl: './also.component.html',
  styleUrls: ['./also.component.css']
})
export class AlsoComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
}
