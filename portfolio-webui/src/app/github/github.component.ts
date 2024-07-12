import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-github',
  standalone: true,
  template: '<a href="{{getGithubUrl()}}" id="github-link">{{getGithubName()}}</a>'
})
export class GithubComponent {
  @Input() username:string =""
  private at = "@"

  getGithubUrl(){
    return `https://github.com/${this.username}`
  }

  getGithubName(){
    return `@${this.username}`
  }
}
