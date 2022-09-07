import { greet } from '@ts-monorepo/core'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
    return <div>{greet('Katsura')}</div>
}

export default Home
