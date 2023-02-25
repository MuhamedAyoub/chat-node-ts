import {User} from "types/user";

const users:User[] = [{
    username:"sqd",
    id:12,
    room:"Go",
},
    {
        username:"sqd",
        id:12,
        room:'Java'
    }]

export const UserJoin = (data:User) => {
    users.push(data);

}

export const findUser = (id:number) => {
    return users.find(user => user.id === id)
}