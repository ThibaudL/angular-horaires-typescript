import { HoraireComponent } from './component/horaires/horaires.component';
import { DayComponent } from './component/day/day.component';
import * as angular from "angular";
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'angularjs-slider';

export default angular.module('my-app', ['ngMaterial', 'ngSanitize', 'rzModule'])
    .component(HoraireComponent.selector,HoraireComponent.component)
    .component(DayComponent.selector,DayComponent.component);
