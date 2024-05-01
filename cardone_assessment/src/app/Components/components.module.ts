import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { VideoSectionComponent } from './video-section/video-section.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeComponent,
    VideoSectionComponent
  ],
  exports: [
    HomeComponent,
  ]
})
export class ComponentsModule{ }
