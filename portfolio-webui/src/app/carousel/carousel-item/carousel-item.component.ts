import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-carousel-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './carousel-item.component.html',
  styleUrl: './carousel-item.component.css'
})
export class CarouselItemComponent {
  @Input() link:string
  @Input() description:string
  @Input() title:string
  @Input() imgLink:string
  @Input() alt:string
}
