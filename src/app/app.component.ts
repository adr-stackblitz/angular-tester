import { Component, VERSION } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import * as xml2js from 'xml2js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  strrr = '';
  parsed = '';

  base64Descode() {
    if (!this.strrr.length) {
      return;
    }
    let parsedWord = CryptoJS.enc.Base64.parse(this.strrr);
    let parsedB64 = parsedWord.toString(CryptoJS.enc.Utf16LE);
    console.log(parsedB64);
    this.parsed = parsedB64;
    xml2js.parseString(parsedB64, (err, res) => {
      console.log('res', res);
    });
  }
}
