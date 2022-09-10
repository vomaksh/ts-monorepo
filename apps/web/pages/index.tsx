import { greet } from '@ts-monorepo/core'
import { HelloComponent } from '@ts-monorepo/components'
import { ReactElement } from 'react'

const Home = (): ReactElement => {
    return <>
        <HelloComponent />
        <div>{greet('Katsura')}</div>
    </>
}

export default Home
