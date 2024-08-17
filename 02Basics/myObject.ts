const user ={
    name:"vikash",
    email:"v@c.c",
    isActive:true
}

// function createUser({name:string,isActive:boolean}){

// }


function createCourse():{name:string,price:number} {
    return {name:"vikash", price:300}
}


// type allies

// type User ={
//     name:string,
//     email:string,
//     isActive:boolean
// }


// function createUser(user:User):User{
//     return {name:"vikash",email:"v@c.c",isActive:true}
// }

// createUser({name:"vikash",email:"v@c.c",isActive:true})

// 

type User ={
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number 
}

let myUser:User ={
    _id:"2312",
    name:"vikash",
    email:"h",
    isActive:false
}

myUser.email ='vvv'

export{}