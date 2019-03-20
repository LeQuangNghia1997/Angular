import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhhocComponent } from './hinhhoc.component';

describe('HinhhocComponent', () => {
    let component: HinhhocComponent;
    let fixture: ComponentFixture<HinhhocComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HinhhocComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HinhhocComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
