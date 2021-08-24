import UsersJson from './users.json'
interface User {
    id: number
    created_at: string
    profile: {
        name: {
            first: string
            last: string
        },
        age: number
        gender: string
        enabled: boolean
    }

}
type Users = User[]
