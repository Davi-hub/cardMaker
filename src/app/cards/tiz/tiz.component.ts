import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-tiz',
  templateUrl: './tiz.component.html',
  styleUrls: ['./tiz.component.css']
})
export class TizComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
  colors = [24,18,12,6,0]
}
