import {
    list,
    object,
    serializable,
} from 'serializr';
import User from './User';

export default class Message {
    @serializable public message = 'Test';

    @serializable(object(User))
    public author = null;

    // Self referencing decorators work in Babel 5.x and Typescript. See below for more.
    @serializable(list(object(Message)))
    public comments = [];

    public getMessage() {
        return this.message;
    }
}
