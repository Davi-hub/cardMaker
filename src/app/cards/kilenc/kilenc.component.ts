import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-kilenc',
  templateUrl: './kilenc.component.html',
  styleUrls: ['./kilenc.component.css']
})
export class KilencComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
  colorsL = [18,12,6,0];
  colorsR = [24,18,12,6,0];
}
