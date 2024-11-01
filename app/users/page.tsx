import React from 'react'
import getAllUsers from '@/lib/getAllUsers'
import Link from "next/link"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title : "Users"
}

export default async function page() {
    const usersData: Promise<User[]> = getAllUsers()

    const users = await usersData

    console.log("Hello")

    const content = (
        <section>
            <h2>
                <Link href="/">Back to Home</Link>
            </h2>
            <br/>
            {users.map(user => {
                return (
                    <>
                        <p key={user.id}>
                            <Link href={`/users/${user.id}`}>{user.name}</Link>
                        </p>
                        <br />
                    </>
                )
            })}
        </section>
    )
    return content
}
