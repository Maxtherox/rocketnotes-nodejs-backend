const UserCreateService = require('./UserCreateService')
const UserRepositoryInMemory = require('../repositories/UserRepositoryInMemory')
const AppError = require("../utils/AppError")

describe("UserCreateService", () => {
    let userRepositoryInMemory = null
    let userCreateService = null

    beforeEach(()=> {
         userRepositoryInMemory = new UserRepositoryInMemory();
         userCreateService = new UserCreateService(userRepositoryInMemory);
    })

    it("user should be create", async ()=> {
        const user = {
            name: "User test",
            email: "user@example.com",
            password: "123"
        }

       const userCreated = await userCreateService.execute(user);
    
       console.log(userCreated);
    
        expect(userCreated).toHaveProperty("id")
    
    });

    it("user not should be create with exists email ", async ()=> {
        const user1 = {
            name: "User test1",
            email: "user@teste.com",
            password: "123"
        };
        const user2 = {
            name: "User test2",
            email: "user@teste.com",
            password: "1323"
        };

        //const userRepository = new UserRepositoryInMemory();
        //const userCreateService = new UserCreateService(userRepository);

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("E-mail já cadastrado."));
    });
}) 
 