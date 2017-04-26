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
    public onEnd? : Function;
    public color? : string;

    constructor(name: string, color : string = "md-primary") {
        this.name = name;
        this.color = color;
    }
}
export default Day;
export {HoraireRange, Day}