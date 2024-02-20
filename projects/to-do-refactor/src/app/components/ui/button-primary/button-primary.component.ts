import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

type BtnVariants = "filled" | "regular"

@Component({
  selector: 'app-button-primary',
  standalone: true,
  imports: [ CommonModule, ButtonModule ],
  templateUrl: './button-primary.component.html',
  styleUrl: './button-primary.component.scss'
})
export class ButtonPrimaryComponent {
  @Input("btn-text") buttonText: string = ""
  @Input() loading:boolean = false
  @Input() variant: BtnVariants = "filled"

  @Output("click") onClick = new EventEmitter()

  click() {
    console.log(`click...${this.buttonText}`)
    console.log(this.onClick)
    this.onClick.emit()
  }
}
