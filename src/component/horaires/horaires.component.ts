import Day from "../day/Day";
const template = require("./horaires.template.html");
export class HoraireComponent {

    //Component description
    public static selector:string = "horaires";
    public static component:Object = {
        template,
        controller : HoraireComponent
    };

    private $log;
    private days:Array<Day> = [
        {
            name : 'Lundi'
        },{
            name : 'Mardi'
        },{
            name : 'Mercredi'
        }, {
            name : 'Jeudi'
        }, {
            name : 'Vendredi'
        }, {
            name : 'Samedi'
        }, {
            name : 'Dimanche'
        }
    ];

    public static $inject = ['$log'];
    constructor($log){
        this.$log = $log;
    }

    $onInit(){
        this.$log.info("onInit")
    }

}
