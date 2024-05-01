import { Component } from '@angular/core';
import { VideoSectionComponent } from '../video-section/video-section.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
