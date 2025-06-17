import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PoModule, PoNotificationService, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-form',
  imports: [PoModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  formulario!: FormGroup;

  readonly actions: Array<PoPageAction> = [
    {
      label: 'Salvar',
      action: () => this.submitForm(),
      disabled: () => this.formulario.invalid
    }
  ]

  constructor(
    private fb: FormBuilder,
    private poNotification: PoNotificationService
  ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      nascimento: [undefined, []],
      idade: [null, [Validators.required, Validators.min(18)]]
    })
  }

  submitForm() {
    if (this.formulario.valid) {
      this.poNotification.success('Formulário salvo');
      console.log(this.formulario.value)
    }
  }

}
