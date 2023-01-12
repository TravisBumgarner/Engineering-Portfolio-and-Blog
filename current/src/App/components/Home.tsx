import styled from 'styled-components'

import { Text, Title } from 'SharedComponents'

const HomeWrapper = styled.div`
`

export { HomeWrapper }

const Home = () => {
    return (
        <HomeWrapper>
            <Title size="medium">Hi! </Title>
            <Text>(Site is slowly experiencing an overhaul.)</Text>
        </HomeWrapper>
    )
}

export default Home
