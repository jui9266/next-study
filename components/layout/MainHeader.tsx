import Link from 'next/link'
import React from 'react'

function MainHeader() {
  return (
    <header>
        <div>
            <h1>
                <Link href={'/'}>
                헤더
                </Link>
            </h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/events'>이벤트</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainHeader