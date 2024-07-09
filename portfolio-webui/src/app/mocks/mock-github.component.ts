import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  template: '<div></div>',
})
export class MockGithubComponent {
  @Input() username: string = ""
}
