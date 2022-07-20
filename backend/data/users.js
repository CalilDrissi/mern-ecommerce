import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@proshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },

    {
        name: 'john doe',
        email: 'john@proshop.com',
        password: bcrypt.hashSync('123456', 10)

    },

    {
        name: 'jane doe',
        email: 'jane@proshop.com',
        password: bcrypt.hashSync('123456', 10)

    }
]



export default users;