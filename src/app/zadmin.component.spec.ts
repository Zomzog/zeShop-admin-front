import { MockOauthService } from './shared/testing/mock-oauth.service';
import { OauthService } from './shared/oauth.service';
import { NavBarModule } from './core/navbar/navbar.component';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdButtonModule, MdCardModule, MdInputModule } from '@angular/material';

import { ZAdminComponent } from './zadmin.component';

 describe('ZAdmin', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ZAdminComponent
      ],
      imports: [
        RouterTestingModule,
        NavBarModule,
        MdCardModule,
        MdInputModule,
        MdButtonModule
      ],
      providers: [
        { provide: OauthService, useValue: MockOauthService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(ZAdminComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
