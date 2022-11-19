import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetaskComponent } from './imagetask.component';

describe('ImagetaskComponent', () => {
  let component: ImagetaskComponent;
  let fixture: ComponentFixture<ImagetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
