import {HoraireSliderComponent} from "./component/horaire-slider/horaire-slider.component";
import { HoraireComponent } from './component/horaires/horaires.component';
import { DayComponent } from './component/day/day.component';
import * as angular from "angular";
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'angularjs-slider';

const NAME = 'angular.horaires';
 angular.module(NAME, ['ngMaterial', 'ngSanitize', 'rzModule'])
    .component(HoraireSliderComponent.selector,HoraireSliderComponent.component)
    .component(HoraireComponent.selector,HoraireComponent.component)
    .component(DayComponent.selector,DayComponent.component);

export default NAME;