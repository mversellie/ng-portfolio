import {Component, OnInit, QueryList, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";
import {CarouselItemComponent} from "./carousel-item/carousel-item.component";
import {CommonModule, NgFor, NgForOf} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
    imports: [
        CarouselItemComponent,CommonModule,NgFor,NgForOf],
  templateUrl: './carousel.component.html',
})
export class CarouselComponent {
  @ViewChild("exampleEntries") exampleEntries:QueryList<CarouselItemComponent>
  protected readonly environment = environment;

  getAriaLabel(index:number){
    return `Slide ${index + 1}`
  }
}