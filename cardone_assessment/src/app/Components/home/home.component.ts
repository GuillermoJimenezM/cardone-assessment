import { Component } from '@angular/core';
import { VideoSectionComponent } from '../video-section/video-section.component';
import { CountdownComponent } from '../countdown/countdown.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoSectionComponent, CountdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
