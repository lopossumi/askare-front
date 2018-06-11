import React from 'react'
import { Container, Icon, Divider } from 'semantic-ui-react'

const Footer = () => (
    <Container>
        <Divider />
        <Icon name='list' />askare &copy; Mikko Loponen 2018.&nbsp;
        <a href='https://github.com/lopossumi/askareact'>View source <Icon name='github' />GitHub.</a>
        <Divider />
    </Container>
)

export default Footer