import { Component, Input, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { ImgData } from '../img-data';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Input() card!: ImgData;
  @Input() element!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }

  onUpload(event: any, arr: ImgData) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      arr.src = reader.result;
    }
  }

  download(e: any) {
    let element = e;
    html2canvas(element, {scale: 5}).then((canvas) => {
      canvas.toBlob((data: any) => {
        let downLoadUrl = window.URL.createObjectURL(data);
        let a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('style', 'display: none');
        a.href = downLoadUrl;
        a.download = 'fileName';
        a.click();
        window.URL.revokeObjectURL('');
        a.remove();
      }, 'image/jpg');
    });
  }
}
