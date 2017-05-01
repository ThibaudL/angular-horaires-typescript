import Day, {HoraireRange} from '../day/Day';
import SliderOption from "./SliderOption";
import Utils from "../../utils/Utils";
const template = require("./horaire-slider.template.html");
import "./horaire-slider.css";
import HoraireOption from "../horaires/HoraireOption";

export class HoraireSliderComponent {

    public static selector:string = "horaireSlider";
    public static component:Object = {
        template,
        controller : HoraireSliderComponent,
        bindings : {
            horaireRange : '=',
            onEnd : '&',
            horaireOption : '<'
        }
    };

    //Bindings
    private horaireRange:HoraireRange;
    private onEnd:Function;
    private horaireOption: HoraireOption;


    private $log;
    private options:SliderOption = {
        vertical : true,
        stepsArray : []
    };

    public static $inject = ['$log'];
    constructor($log){
        this.$log = $log;
    }

    private initStepsArray(){
        this.options.stepsArray.push(this.horaireOption.endHour+'h00');
        for(let hour:number = this.horaireOption.endHour ; hour >= this.horaireOption.startHour ; hour--){
            if(hour != this.horaireOption.endHour) {
                for (let minutes: number = 60-this.horaireOption.intervalHour; minutes >= 0; minutes = minutes - this.horaireOption.intervalHour) {
                    this.options.stepsArray.push(Utils.hourFormat(hour) + 'h' + Utils.hourFormat(minutes));
                }
            }
        }
    }

    public $onInit(){
        this.initStepsArray();
        this.horaireRange.min = Utils.hourFormat(this.horaireOption.endHour)+'h00';
        this.horaireRange.max = Utils.hourFormat(this.horaireOption.startHour)+'h00';

        if(this.onEnd){
            this.options.onEnd = (sliderId, modelValue, highValue, type) => {
                this.onEnd({modelValue, highValue, type});
            }
        }
    }

}
