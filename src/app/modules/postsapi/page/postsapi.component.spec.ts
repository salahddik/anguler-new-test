import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsapiComponent } from './postsapi.component';

describe('PostsapiComponent', () => {
  let component: PostsapiComponent;
  let fixture: ComponentFixture<PostsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
