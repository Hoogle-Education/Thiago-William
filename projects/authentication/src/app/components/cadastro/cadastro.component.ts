import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';

export interface CadastroUser {
  username: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  authService = inject(AuthService);

  cadastroForm: FormGroup<CadastroUser> = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log("submit")
    const userToRegister = this.cadastroForm.getRawValue();
    this.authService.cadastrar(userToRegister).subscribe((value) => console.log(value))
  }
}
