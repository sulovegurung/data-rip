import { User } from '../models/user.interface';

const userList: User[] = [
    {
        name: 'Sulav Gurung',
        company: 'PWH',
        location: 'Bansabari, KTM',
        bio: 'I make videos on my favourite subjects',
        avatar_url: 'http://i.imgur.com/uL6v96Vb.jpg',
        email: 'love_gurg@yahoo.com'
    },
    {
        name: 'Aryaman Gurung',
        company: 'Web Tree Pvt. Ltd.',
        location: 'Chakrapth, KTM',
        bio: 'I love ionic subjects',
        avatar_url: 'http://i.imgur.com/YBPRUHKb.jpg',
        email: 'aryaman@yahoo.com'
    }
]

export const USER_LIST = userList;