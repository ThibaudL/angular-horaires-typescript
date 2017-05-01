import Day from './day';
import './day.css';
import SliderOption from "./SliderOption";
import Utils from "../../utils/Utils";
import HoraireOption from "../horaires/HoraireOption";
const template = require("./day.template.html");

export class DayComponent {

    public static selector:string = "day";
    public static component:Object = {
        template,
        controller : DayComponent,
        bindings : {
            day : '=',
            onEndMorning : '&',
            onEndAfternoon : '&',
            morningHoraireOption : '<',
            afternoonHoraireOption : '<'
        }
    };

    //Bindings
    private day:Day;
    private onEndMorning:Function;
    private onEndAfternoon:Function;
    private morningHoraireOption:HoraireOption;
    private afternoonHoraireOption:HoraireOption;

    private $log;

    public static $inject = ['$log'];
    constructor($log){
        this.$log = $log;
    }
}
