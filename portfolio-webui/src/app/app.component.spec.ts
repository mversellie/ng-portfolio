import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {GithubComponent} from "./github/github.component";
import {MockGithubComponent} from "./mocks/mock-github.component";

describe('AppComponent', () => {
  const username = "mversellie"
  let fixture:ComponentFixture<AppComponent>
  let app:AppComponent

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]})
        .overrideComponent(GithubComponent,{add:{imports:[MockGithubComponent]},remove:{imports:[GithubComponent]}})
        .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    //assert
    expect(app).toBeTruthy();
  });

  it('should render heading', () => {
    //assert
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.masthead-heading')?.textContent).toContain('Marco Versellie');
  });


  it('should pass in username to github component', () => {
    //assert
    expect(app.github.username).toEqual("mversellie")
  });

});
