import { Component } from '@angular/core';
import { ButtonPrimaryComponent } from '../../ui/button-primary/button-primary.component';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ ButtonPrimaryComponent ],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.scss'
})
export class CreateTodoComponent {

}
