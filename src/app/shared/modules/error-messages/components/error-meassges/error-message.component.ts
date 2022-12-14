import { Component, Input } from "@angular/core";

@Component({
    selector: 'mdc-error-message',
    template: "<div> {{errorInput}} </div>",
})
export class ErrorMessageComponent {
    @Input('error') errorInput: string = "Something went wrong!";
}
