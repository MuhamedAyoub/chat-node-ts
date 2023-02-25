import {message} from "types/message";
import moment from "moment";
export const  messageFormat = (data:message):message => {
    let {time,...info} = data;
    time = moment().format('h:mm a');
    return {time,...info}
}
