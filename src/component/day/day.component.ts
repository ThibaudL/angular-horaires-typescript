import Day from './day';
import './day.css';
import SliderOption from "./SliderOption";
import Utils from "../../utils/Utils";
const template = require("./day.template.html");

export class DayComponent {

    public static selector:string = "day";
    public static component:Object = {
        template,
        controller : DayComponent,
        bindings : {
            day : '=',
            onEnd : '&'
        }
    };

    //Bindings
    private day:Day;
    private onEnd:Function;


    private $log;
    private options:SliderOption = {
        vertical : true,
        stepsArray : []
    };
    private static readonly START_HOUR:number = 8;
    private static readonly END_HOUR:number = 13;

    public static $inject = ['$log'];
    constructor($log){
        this.$log = $log;
    }

    private initStepsArray(){
        this.options.stepsArray.push(DayComponent.END_HOUR+'h00');
        for(let hour:number = DayComponent.END_HOUR ; hour >= DayComponent.START_HOUR ; hour--){
            for(let minutes:number = 50; minutes >= 0; minutes = minutes-10){
                this.options.stepsArray.push(Utils.hourFormat(hour)+'h'+Utils.hourFormat(minutes));
            }
        }
    }

    public $onInit(){
        this.initStepsArray();
        this.day.morning = {
            min : Utils.hourFormat(DayComponent.END_HOUR)+'h00',
            max : Utils.hourFormat(DayComponent.START_HOUR)+'h00'
        };
        if(this.onEnd){
            this.options.onEnd = (sliderId, modelValue, highValue, type) => {
                this.onEnd({modelValue, highValue, type});
            }
        }
    }

}
