import {
    identifier,
    serializable,
} from 'serializr';

export default class User {
    @serializable(identifier())
    public uuid = Math.random();

    @serializable public displayName = 'John Doe';
}