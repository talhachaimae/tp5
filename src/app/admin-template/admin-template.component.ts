import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-admin-template',
  standalone: true,
  imports: [
    RouterOutlet,

  ],
  templateUrl: './admin-template.component.html',
  styleUrl: './admin-template.component.css'
})
export class AdminTemplateComponent {

}
