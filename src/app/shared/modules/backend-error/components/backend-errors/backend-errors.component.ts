import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from 'src/app/auth/types/backen-errors.interface';

@Component({
  selector: 'mdc-backend-errors',
  templateUrl: './backend-errors.component.html',
  styleUrls: ['./backend-errors.component.scss']
})
export class BackendErrorsComponent implements OnInit {
  @Input('validationErros') validationErrosInput: BackendErrorInterface;
  errorMessages: string[];
  constructor() { }

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.validationErrosInput).map((key: string) => {
      let messages;
      for (let txt of this.validationErrosInput[key]) {
        messages = this.getErrorMessages(txt, key);
      }
      return messages;
    })
  }

  getFirstWord(txt: string) {
    return txt.split(" ")[0];
  }

  getErrorMessages(txt: string, key: string) {
    let firstWord = this.getFirstWord(txt);
    let messages;
    if (key.toLowerCase() === firstWord.toLowerCase()) {
      messages = this.validationErrosInput[key].join(' ');
    } else {
      messages = `${key} ${txt}`;
    }
    return messages;
  }

}
