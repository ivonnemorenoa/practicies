import { Component, Input } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent {
  @Input() name!: string;
  @Input() items!: Profile[];

}
