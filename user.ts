interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
  caption: string;
  age: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
