import Day from "../day/Day";
const template = require("./horaires.template.html");
export class HoraireComponent {

    //Component description
    public static selector: string = "horaires";
    public static component: Object = {
        template,
        controller: HoraireComponent
    };

    private $log;
    private days: Array<Day> = [];

    public static $inject = ['$log'];

    constructor($log) {
        this.$log = $log;
    }

    $onInit() {
        this.days.push(new Day('Lundi'));
        this.days.push(new Day('Mardi'));
        this.days.push(new Day('Mercredi'));
        this.days.push(new Day('Jeudi'));
        this.days.push(new Day('Vendredi'));
        this.days.push(new Day('Samedi'));
        this.days.push(new Day('Dimanche'));
        let all = new Day('All');
        all.onEnd = (modelValue, highValue, type) => {
            this.days.forEach((aDay) => {
                if (aDay.name !== 'All') {
                    if(type === "min")
                        aDay.morning.min = modelValue;
                    else if(type === "max") {
                        aDay.morning.max = highValue;
                    }
                }
            });
        };
        this.days.push(all);
    }

}
