import styled from 'styled-components'

import { Title } from 'SharedComponents'

const HomeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
`

export { HomeWrapper }

const Home = () => {
    return (
        <HomeWrapper>
            <Title size="medium">Hi!</Title>
        </HomeWrapper>
    )
}

export default Home
