import React from 'react'
import { HighligthCard } from '../../components/HighligthCard'

import {Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, Icon} from './styles'

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo source={{uri:'https://avatars.githubusercontent.com/u/66449040?v=4'}}/>
                        <User>
                            <UserGreeting>Olá,</UserGreeting>
                            <UserName>Leonardo</UserName>
                        </User>
                        
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
                
            </Header>

            <HighligthCard/>
            
        </Container>
    )
}
