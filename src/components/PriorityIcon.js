import { Icon } from 'semantic-ui-react'
import React from 'react'

const PriorityIcon = ({ priority }) => {
    switch (priority) {
        case 5: return <Icon name='angle double up' />
        case 4: return <Icon name='angle up' />
        case 3: return null
        case 2: return <Icon name='angle down' />
        case 1: return <Icon name='angle double down' />
        default: return null
    }
}

export default PriorityIcon