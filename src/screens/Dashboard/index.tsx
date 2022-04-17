import React from 'react'
import { HighligthCard } from '../../components/HighligthCard'
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

import {Container, Header, UserInfo, Photo, User, UserGreeting, UserName, UserWrapper, Icon, HighligthCards, Transactions, Title, TransactionsList} from './styles'

export interface DatalistProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {

    const data: DatalistProps[] = [{
        id: '1',
        type: 'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name: 'Vendas',
            icon: 'dollar-sign'     
        },
        date: "13/04/2022"
    },
    {   
        id: '2',
        type: 'negative',
        title: "Hamburgueria Pizzy",
        amount: "R$ 59,00",
        category: {
            name: 'Alimentação',
            icon: 'coffee'     
        },
        date: "10/04/2022"
    },
    {   
        id: '3',
        type: 'negative',
        title: "Aluguel do apartamento",
        amount: "R$ 2.000,00",
        category: {
            name: 'Casa',
            icon: 'shopping-bag'     
        },
        date: "05/04/2022"
    }]

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

            <HighligthCards 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 24}}
            >
                <HighligthCard
                    type="up"
                    title="Entradas"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"    
                />
                <HighligthCard
                    type="down"
                    title="Saídas"
                    amount="R$ 1.250,00"
                    lastTransaction="Última entrada dia 03 de abril" 
                />
                <HighligthCard
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 a 16 de abril" 
                />
            </HighligthCards>
            
            <Transactions>

                <Title>Listagem</Title>

                <TransactionsList 
                    data={data}
                    keyExtractor={ item => item.id}
                    renderItem={({ item }) => <TransactionCard data={item}/>} 
                />

                

            </Transactions>
        </Container>
    )
}
