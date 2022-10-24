# BeerShop

## Technical: 
- Styles: scss with mixins and nested elements.
-         using bootstrap (especially to the margins and to create responsive design)
-         using grid system in all-beers.componet - to reach the "tile" effect with beer-items.
-         using angular specific ng.class - to make active class to the navigated nav-element in All-beers page.
-         
- Communication between the components and pages: service - beerService and httpService.
-                                                         - Custom-components: using property bindings and string literals.
-                                                         - Communication between custom elements and pages - @Input and EventEmitter (with checkbox)
- Filtering: Search bar - custom pipe: searchPipe
-            Filter bar with checkboxes: using GET method with map(rxjs)
-            Filtering alcohol range: with reactive Form (reactiveFormsModule) - with these three methods the filtered list is functioning separated.
-            
- Structural directives: ngIf - to show / hide the alert-message in filter-bar and to show / hide "You might also like" text in the shoppingList page.
-                        ngFor -  to get data from beerService.
-                        
- Rooting - using :id with Router navigation to select the appropiate item in beer-item component.





This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
