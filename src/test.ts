// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed, TestBed,async, ComponentFixture } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);


import{AppComponent} from './app/app.component';
import{AppRoutingModule} from'./app/app-routing.module';//az osztályban nem volt mező,csak egy konstans tömb
//import{BasicErrorDialogComponent} from './app/dialogs/basic-error-dialog/basic-error-dialog.component';
//import{}


it(`should have as title 'app'`, async(()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('app');
}));



/*it(`should have as router ''`, async(()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('');
}));

it(`should have as route ''`, async(()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('');
}));

it(`should have as userService ''`, async(()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('');
}));
it(`should have as dialog ''`, async(()=>{
  const fixture = TestBed.createComponent(AppComponent);
  const app=fixture.debugElement.componentInstance;
  expect(app.title).toEqual('');
}));
*/
