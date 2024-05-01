import { Component } from '@angular/core';
import { VideoSectionComponent } from '../video-section/video-section.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { PlaybookCtaComponent } from '../playbook-cta/playbook-cta.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoSectionComponent, CountdownComponent, PlaybookCtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
