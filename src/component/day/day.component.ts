import Day from './day';
import './day.css';
import SliderOption from "./SliderOption";
const template = require("./day.template.html");

export class DayComponent {

    public static selector:string = "day";
    public static component:Object = {
        template,
        controller : DayComponent,
        bindings : {
            day : '='
        }
    };


    private $log;
    private day:Day;
    private options:SliderOption = {
        vertical : true,
        stepsArray : []
    };
    private static readonly START_HOUR:number = 8;
    private static readonly END_HOUR:number = 18;

    public static $inject = ['$log'];
    constructor($log){
        this.$log = $log;
        this.initStepsArray();
    }

    private initStepsArray(){
        this.options.stepsArray.push(DayComponent.END_HOUR+'h00');
        for(let hour:number = DayComponent.END_HOUR ; hour > DayComponent.START_HOUR ; hour--){
            for(let minutes:number = 50; minutes >= 0; minutes = minutes-10){
                this.options.stepsArray.push(hour+'h'+minutes);
            }
        }
    }

    public $onInit(){
        this.$log.info("onInit day")
    }

}
