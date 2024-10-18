'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const users = [{
    name: 'User1'
}];

export default function LoginUserSelector() {
    const router = useRouter();

    const activateUser = (user) => {
        router.push('/explore');
    };

    const userListItem = users.map(user =>
        <figure key={user.name} className="mr-6 cursor-pointer" onClick={() => activateUser(user)}>
            <Image src="/images/usericon.jpg" alt={user.name} width="100" height="100" />
            <figcaption className="text-center">{user.name}</figcaption>
        </figure>
    );

    return (
        <div className="flex">
            {userListItem}
        </div>
    );
}
