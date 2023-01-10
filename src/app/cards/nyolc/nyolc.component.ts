import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-nyolc',
  templateUrl: './nyolc.component.html',
  styleUrls: ['./nyolc.component.css']
})
export class NyolcComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
  colors = [18,12,6,0]
}
