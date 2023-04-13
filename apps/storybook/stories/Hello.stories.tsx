import React from 'react'
import { HelloComponent } from '@ts-monorepo/ui'

export default {
    title: 'Hello Component',
    component: HelloComponent,
};

export const Hello = () => {
    render: () => <HelloComponent />
}
