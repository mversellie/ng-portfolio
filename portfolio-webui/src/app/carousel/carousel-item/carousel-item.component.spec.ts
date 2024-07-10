import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselItemComponent } from './carousel-item.component';
import {By} from "@angular/platform-browser";

describe('CarouselItemComponent', () => {
  let component: CarouselItemComponent;
  let fixture: ComponentFixture<CarouselItemComponent>;
  let title:string;
  let imageLink:string;
  let description:string
  let alt:string

  beforeEach(async () => {
    title = "aTitle"
    imageLink = "http://somewhere.local/img.png"
    description = "aDescription"
    alt = "there should be an image here"
    await TestBed.configureTestingModule({
      imports: [CarouselItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselItemComponent);
    component = fixture.componentInstance;
    component.imgLink=imageLink;
    component.alt=alt
    component.description=description
    component.title=title
    fixture.detectChanges();
  });

  it('should create', () => {
    //assert
    expect(component).toBeTruthy();
  });


  it('should create with inputs', () => {
    //assert
    const image = fixture.debugElement.query(By.css("img"))
    console.log(image)
    expect(image.attributes["src"]).toBe(imageLink)
    expect(image.attributes["alt"]).toBe(alt)
    const captInnerHtml = fixture.debugElement.query(By.css(".carousel-caption")).nativeElement.innerHTML;
    expect(captInnerHtml).toContain(`<h5>${title}</h5>`)
    expect(captInnerHtml).toContain(`<p>${description}</p>`)
  });
});
