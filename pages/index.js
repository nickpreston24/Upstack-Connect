import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Index = () => { 

    const msg = 'Nothing here yet...'
    return (

        <div>
            <h1>Hello & Welcome to Upstack Connect!</h1>
            <p>Some data:</p>
            <i>{`${msg}`}</i>

            {/* Navbar mock */}
            <br />
            <Link href="/profile">
                <a>Profile</a>
            </Link>
            <br />
            <Link href="/about">
                <a>About Upstack</a>
            </Link>
            <br />

        </div>
    )
}

export default Index;