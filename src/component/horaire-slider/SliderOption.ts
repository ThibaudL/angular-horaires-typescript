/**
 * Created by lamar on 25/04/2017.
 */
interface SliderOption{
    vertical : boolean;
    stepsArray : Array<string>;
    onChange? : Function;
    onEnd? : Function;
}

export default SliderOption;