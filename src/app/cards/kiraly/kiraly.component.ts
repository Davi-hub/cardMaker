import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-kiraly',
  templateUrl: './kiraly.component.html',
  styleUrls: ['./kiraly.component.css']
})
export class KiralyComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
}
