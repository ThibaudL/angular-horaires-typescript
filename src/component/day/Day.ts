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

    constructor(name: string) {
        this.name = name;
    }
}
export default Day;
export {HoraireRange, Day}