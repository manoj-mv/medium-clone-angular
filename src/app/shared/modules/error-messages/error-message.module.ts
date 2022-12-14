import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ErrorMessageComponent } from "./components/error-meassges/error-message.component";

@NgModule({
    declarations: [
        ErrorMessageComponent
    ],
    imports: [CommonModule],
    exports: [
        ErrorMessageComponent
    ]
})
export class ErrorMessageModule { }
