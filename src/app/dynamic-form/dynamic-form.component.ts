import { Component, ViewChild, viewChild } from '@angular/core';
import { PoDynamicFormComponent, PoModule, PoNotificationService, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-dynamic-form',
  imports: [PoModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css'
})
export class DynamicFormComponent {
  @ViewChild('dynamicForm', { static: true }) dynamicForm!: PoDynamicFormComponent;

  fields = [
    {
      property: 'name',
      label: 'Nome',
      required: true,
      minLength: 3,
      gridColumns: 12
    },
    {
      property: 'nascimento',
      label: 'Data de nascimento',
      type: 'date',
      format: 'mm/dd/yyyy',
      gridColumns: 6,
    },
    { property: 'idade',
      required: true, label: 'Idade',
      gridColumns: 6,
      minValue: 18,
      type: 'number'
    },
  ];

  readonly actions: Array<PoPageAction> = [
    {
      label: 'Salvar',
      action: () => this.submitForm(),
      disabled: () => this.dynamicForm.form.invalid
    }
  ];

  constructor(private poNotification: PoNotificationService) {}

  submitForm() {
    this.poNotification.success('Formulário salvo!')
    console.log(this.dynamicForm.form.value)
  }
}
