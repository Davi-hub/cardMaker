import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-asz',
  templateUrl: './asz.component.html',
  styleUrls: ['./asz.component.css']
})
export class AszComponent {
  @Input() colorSrc!: string;
  @Input() image!: any;
}
