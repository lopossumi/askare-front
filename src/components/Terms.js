import React from 'react'
import { Container, Divider } from 'semantic-ui-react'

class Terms extends React.Component {
    render() {
        return (
            <Container>
                <h1>Terms of Use and Privacy Statement</h1>

                <Divider />
                
                <h2>What information is collected and why</h2>

                <p>In registering to use the software we collect the following information:</p>
                
                <ul>
                    <li>Your username, which you can freely select</li>
                    <li>Your e-mail address, which is used for password recovery</li>
                    <li>Your password, which is hashed before storing into the database</li>
                    <li><em>(optional)</em> Your first and last name, which can be used in the user search feature if you decide to be seen.</li>
                </ul>

                No other identifying information is collected.

                <h2>What information is stored on your computer</h2>

                <p>When you sign in, an encrypted access token is stored on your device. It is sent back to the server with each request
                    to ensure that you are still logged in. To remove the token, sign out.</p>

                <h2>No data is ever safe</h2>

                <p>The software is written for a university project assignment and is provided as a demo, free of charge, using free hosting. I cannot make guarantees 
                    of availability or against data loss. If you are concerned about your data, you are free
                    to deploy the software on your own server: the full source code is available 
                    on <a href='http://github.com/lopossumi/askare-front/' target='_blank' rel='noopener noreferrer'>GitHub.</a></p>
                
                <p>You can download your data. If you decide to delete your account, all your data is deleted and cannot be recovered.</p>
                
                <p>Your data will not be sold to anyone nor used in marketing.</p>

            </Container>
        )
    }
}

export default Terms