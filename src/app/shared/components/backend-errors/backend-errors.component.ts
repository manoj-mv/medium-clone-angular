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
    this.errorMessages = Object.keys(this.validationErrosInput).map((name: string) => {
      const messages = this.validationErrosInput[name].join(' ');
      return messages;
    })
  }

}
