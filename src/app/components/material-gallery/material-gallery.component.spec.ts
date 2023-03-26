import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGalleryComponent } from './material-gallery.component';

describe('MaterialGalleryComponent', () => {
  let component: MaterialGalleryComponent;
  let fixture: ComponentFixture<MaterialGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
