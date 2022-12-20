import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BackendErrorInterface } from 'src/app/auth/types/backen-errors.interface';
import { ArticleInputInterface } from 'src/app/shared/types/article-input.interface';

@Component({
  selector: 'mdc-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  @Input('initialValues') initialValuesInput: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingInput: boolean;
  @Input('errors') errorsInput: BackendErrorInterface | null;

  @Output('articleSubmit') articleSubmitOutput = new EventEmitter<ArticleInputInterface>;

  articleForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  initializeForm(): void {
    this.articleForm = this.fb.group({
      title: this.initialValuesInput.title,
      description: this.initialValuesInput.description,
      body: this.initialValuesInput.body,
      tagList: this.initialValuesInput.tagList.join(' ')
    });
  }

  onSubmit(): void {
    this.articleSubmitOutput.emit(this.articleForm.value);
  }

}
