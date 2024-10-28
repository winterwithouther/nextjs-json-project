import { Params } from 'next/dist/server/request/params'
import React from 'react'
import getUser from '@/lib/getUser'
import getUserPost from '@/lib/getUserPost'
import { Suspense } from 'react'

type params = {
    params : {
        userId: string
    }
}

export default async function page({params : { userId }}: Params) {
    const userData: Promise<User> = getUser(userId)
    const userPostsData: Promise<Post[]> = getUserPost(userId)

    // const [user, userPosts] = await Promise.all([userData, userPostsData])

    const user = await serData

    return (<>
        <h2>{user.name}</h2>
        <br></br>
        <Suspense fallback={<h2>Loading... </h2>}>
            <UserPosts promise={userPostsData} />
        </Suspense>
    </>)
}
