import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-benefit-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefit-section.component.html',
  styleUrl: './benefit-section.component.scss'
})
export class BenefitSectionComponent {
  public paths: string[] = [
    "wcf-typ-program1.jpeg",
    "wcf-typ-program2.jpeg",
    "wcf-typ-program3.jpeg",
    "wcf-typ-program4.jpeg",
    "wcf-typ-program5.jpeg",
    "wcf-typ-program6.jpeg",
    "wcf-typ-program7.jpeg",
    "wcf-typ-program8.jpeg",
    "wcf-typ-program9.jpeg",
]; 
}
