import {Prisma, PrismaClient} from '@prisma/client'
import {User} from "types/user";
import {Room} from "types/Room"

const prisma = new PrismaClient()


export async function createUser(user:User) {
    const newUser = await prisma.user.findFirst({
        where:{
            id:user.id
        },
        select:{
            username:true,
            roomName:true,
            id:true
        }
    })
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
export const  getCurrentUser  = async (id:string) => {
        const user = await prisma.user.findFirst({
            where:{
                id
            }
        })
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
export const getRoom = async (roomName:string):Promise<Room|null> => {
    const room = await prisma.room.findFirst({
        where:{
            name:roomName,
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
