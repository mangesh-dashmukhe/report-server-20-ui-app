import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarsModule } from '@progress/kendo-angular-dateinputs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalendarsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'report-server-ui-app';
}
