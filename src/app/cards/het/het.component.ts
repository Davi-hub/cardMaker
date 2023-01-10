import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-het',
  templateUrl: './het.component.html',
  styleUrls: ['./het.component.css']
})
export class HetComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
  colorsL = [12,6,0]
  colorsR = [18,12,6,0]
}
