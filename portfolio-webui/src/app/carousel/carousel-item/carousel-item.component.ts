import {Component, Input} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    NgOptimizedImage,NgForOf
  ],
  templateUrl: './carousel-item.component.html',
})
export class CarouselItemComponent{
  @Input() description:string
  @Input() title:string
  @Input() imgLink:string
  @Input() alt:string
}
