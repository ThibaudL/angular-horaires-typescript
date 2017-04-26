/**
 * Created by T_LAMARCHE on 26/04/2017.
 */
export default class Utils {
    static leftPad(str: string, len: number, ch = '.'): string {
        len = len - str.length + 1;
        return len > 0 ?
            new Array(len).join(ch) + str : str;
    }

    static hourFormat(n : number){
        return Utils.leftPad(n.toString(10),2,'0');
    }
}