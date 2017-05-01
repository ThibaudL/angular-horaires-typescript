import Day from "../day/Day";
import HoraireOption from "./HoraireOption";
const template = require("./horaires.template.html");
import "angular-material/angular-material.min.css"
import "angularjs-slider/dist/rzslider.css"

export class HoraireComponent {

    //Component description
    public static selector: string = "horaires";
    public static component: Object = {
        template,
        controller: HoraireComponent,
        bindings: {
            morningOption: '<?',
            afternoonOption: '<?',
            daysToDisplay: '<?'
        }
    };

    //bindings
    private morningOption: HoraireOption;
    private afternoonOption: HoraireOption;
    private daysToDisplay: Array<string>;

    private days: Array<Day> = [];

    private $log;
    public static $inject = ['$log'];

    constructor($log) {
        this.$log = $log;
    }

    $onInit() {
        if (!this.morningOption) {
            this.$log.error("parameter morning-option is mandatory")
            throw "";
        }
        if (!this.afternoonOption) {
            this.$log.error("parameter afternoon-option is mandatory")
            throw "";
        }
        if (!this.daysToDisplay) {
            this.days.push(new Day('Lundi'));
            this.days.push(new Day('Mardi'));
            this.days.push(new Day('Mercredi'));
            this.days.push(new Day('Jeudi'));
            this.days.push(new Day('Vendredi'));
            this.days.push(new Day('Samedi'));
            this.days.push(new Day('Dimanche'));
        } else {
            this.daysToDisplay.forEach((day) => {
                this.days.push(new Day(day));
            });
        }

        let all = new Day('All', 'md-warn');
        all.onEndMorning = (modelValue, highValue, type) => {
            this.days.forEach((aDay) => {
                if (aDay.name !== 'All') {
                    if (type === "min")
                        aDay.morning.min = modelValue;
                    else if (type === "max") {
                        aDay.morning.max = highValue;
                    }
                }
            });
        };
        all.onEndAfternoon = (modelValue, highValue, type) => {
            this.days.forEach((aDay) => {
                if (aDay.name !== 'All') {
                    if (type === "min")
                        aDay.afternoon.min = modelValue;
                    else if (type === "max") {
                        aDay.afternoon.max = highValue;
                    }
                }
            });
        };
        this.days.push(all);
    }

}
