import { Component } from '@angular/core';
import { ImgData } from './img-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cardMaker';
  sources = ['p.png', 't.png', 'z.png', 'm.png'];
  back = new ImgData("",100,0,0);
  plus = new ImgData("",100,0,0);
  also = [      new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  felso = [     new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  kiraly = [    new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  hetes = [     new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  nyolcas = [   new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  kilences = [  new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  tizes = [     new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
  asz = [       new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0), new ImgData("",100,0,0)];
}
