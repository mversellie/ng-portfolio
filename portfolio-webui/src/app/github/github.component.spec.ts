import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';
import {By} from "@angular/platform-browser";

describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;
  let user= "a_test_user"

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    component.username=user
    fixture.detectChanges();
  });

  it('should create', () => {
    //assert
    expect(component).toBeTruthy();
  });


  it('github name shows and link works', () => {
    //assert
    const labelSection = fixture.debugElement.query(By.css("#githubLink"))
    expect(labelSection.attributes["href"]).toEqual(`https://github.com/${user}`)
    expect(labelSection.nativeElement.innerHTML).toEqual(`@${user}`)
  });
});
