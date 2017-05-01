/**
 * Created by lamar on 25/04/2017.
 */
class HoraireRange {
    public min : string;
    public max : string;
}

class Day {
    public name : string;
    public morning? : HoraireRange;
    public afternoon? : HoraireRange;
    public onEndMorning? : Function;
    public onEndAfternoon? : Function;
    public color? : string;

    constructor(name: string, color : string = "md-primary") {
        this.name = name;
        this.color = color;
        this.morning = new HoraireRange();
        this.afternoon = new HoraireRange();
    }
}
export default Day;
export {HoraireRange, Day}