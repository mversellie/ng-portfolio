import {Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GithubComponent} from "./github/github.component";
import {environment} from "../environments/environment";
import {CarouselComponent} from "./carousel/carousel.component";
import {CommonModule, NgFor} from "@angular/common";
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GithubComponent, CarouselComponent, CommonModule, NgFor, ContactFormComponent, AboutComponent],
  templateUrl: './app.component.html'
})
export class AppComponent{
  @ViewChild("github") github:GithubComponent
  githubName = environment.gitUsername;
  headerDescription = environment.headerDescription;
  headerName = environment.headerName;
  author = environment.author;
  year = new Date().getFullYear();
  navbarName = environment.navbarName;
  protected readonly Date = Date;
}
