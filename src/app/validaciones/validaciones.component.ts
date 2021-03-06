import { Post } from './../classes/post';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ac-validaciones',
  templateUrl: './validaciones.component.html',
  styleUrls: ['./validaciones.component.css']
})
export class ValidacionesComponent implements OnInit {

  model: Post = new Post(
    1, 
    "Formularios con Angular 2",
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  );

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm()
    {
        this.postForm = this.fb.group({
            title: [this.model.title, Validators.compose([
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(60)
            ])],
            content: [this.model.content, Validators.compose([
                Validators.required,
                Validators.minLength(20),
                Validators.maxLength(200)
            ])]
        });

        this.postForm.valueChanges.subscribe(
            data => this.onValueChanged(data)
        );

        this.onValueChanged();
    }

    onValueChanged(data?: any)
    {
        if (!this.postForm) {
            return;
        }

        console.log(data);

        const form = this.postForm;
        for (const field in this.formErrors)
        {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }

  formErrors = {
    'title': '',
    'content': ''
  };

  validationMessages = {
      'title': {
          'required':      'El título es requerido.',
          'minlength':     'El título debe tener más de 4 carácteres.',
          'maxlength':     'El título no debe tener más de 60 carácteres.'
      },
      'content': {
          'required':      'El contenido es requerido',
          'minlength':     'El título debe tener más de 20 carácteres.',
          'maxlength':     'El título no debe tener más de 200 carácteres.',
      }
  };

  postForm: FormGroup;

  get post() {
    return JSON.stringify(this.model);
  }

  onSubmit(){
    console.log(this.model);
  }

}
