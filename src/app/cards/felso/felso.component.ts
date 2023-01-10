import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-felso',
  templateUrl: './felso.component.html',
  styleUrls: ['./felso.component.css']
})
export class FelsoComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
}
