import {Prisma, PrismaClient} from '@prisma/client'
import {User} from "types/user";
import {Room} from "types/Room"
import {message} from "types/message";

const prisma = new PrismaClient()

export const  getCurrentUser  = async (id:string):Promise<User | null> => {
    const user = await prisma.user.findFirst({
        where:{
            id
        },
        select:{
            username:true,
            roomName:true

        }
    })
    return user;
}
export async function createUser(user:User) {
    const newUser = await getCurrentUser(user.id || '')
    if(newUser) return newUser
    return prisma.user.create({
        data:{
            id:user.id,
            username:user.username,
            roomName:user.roomName,
        },
        include:{
            room:true
        }
    });

}

export function LeaveUser(id:string) {
    return prisma.user.delete({
        where:{
            id
        },
        select:{
            username:true,
            roomName:true
        }
    })
}

export const getRoomUsers = async  (room:string):Promise<Array<Prisma.UserGetPayload<{ select: { username: boolean }; where: { roomName: string } }>>> =>  {
    const RoomUsers =  await prisma.user.findMany({
        where:{
            roomName:room
        },
        select:{
            username:true
        }
    })
    return RoomUsers;
}

const createRooms = async (...rooms:Room[]) => {
    const LegalRooms  = rooms.map(e => {
        return {
        data:{
            id:e.id,
            name:e.name,
        }
    }
    })
     const getRooms = await prisma.room.createMany(...LegalRooms)
    return getRooms
}
export const getRoom = async (roomName:string):Promise<Prisma.Prisma__RoomClient<Prisma.RoomGetPayload<{ select: { name: boolean; messages: { select: { time: boolean; text: boolean; username: boolean }; where: { roomName: string } } }; where: { name: string } }> | null, null>> => {
    const room = await prisma.room.findFirst({
        where:{
            name:roomName,
        },select :{
            name:true,
            messages:{
                select:{
                    username:true,
                    time:true,
                    text:true

                }
            }


        }

    })
    return room;
}
  createRooms({
    name:"Go",
    id:"1"
},{
    name:"Java",
    id:"2"
},
{
    name:"Js",
        id:"3"
},
{
    name:"Python",
        id:"4"
},
    {
        name:"Go",
        id:"1"
    }).then(() => console.log("Rooms Created")).catch(e => {throw new Error("Can\'t create room because")})


export const createMessage = async (da: message, roomName: string |undefined):Promise<Prisma.Prisma__messageClient<Prisma.messageGetPayload<{ include: { user: boolean; room: boolean }; data: { text: string; time: string | ""; roomName: string; username: string } }>>> => {
        const message = await prisma.message.create({
            data:{
                username:da.username,
                text:da.text,
                roomName:roomName || '',
                time:da.time

            },include:{
                user:true,
                room:true
            }
        })
    return message
}