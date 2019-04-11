import {
    deserialize,
    serialize,
} from 'serializr';
import Message from './Message';


export default class Messages {
    private Messages: Message[];
    private serializedMessages: Message[];
    constructor() {
        this.Messages = [];
    }

    public makeMessage() {
        console.log('makeMessage');
        this.Messages.push(new Message());
    }

    public serializeMessages() {
        console.log('serializeMessages');
        this.serializedMessages = this.Messages.map(m => serialize(m));
    }

    public deserializeMessages() {
        console.log('deserializeMessages');
        // object destroy is also same
        // this.Messages.forEach((m, i) => {
        //     delete this.Messages[i];
        // })
        this.Messages = this.serializedMessages.map(m => deserialize(Message, m));
    }
}
