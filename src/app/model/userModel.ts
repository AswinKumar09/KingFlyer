export class Usermodel {

    id:number;
    name:string;
    email:string;
    password: string;
    gender:string;
    phoneNo:string;


   constructor(id, name, email, password, gender, phoneNo)
   {
       this.id = id;
       this.name = name;
       this.email = email;
       this.password = password;
       this.gender = gender;
       this.phoneNo = phoneNo;
   }
}
