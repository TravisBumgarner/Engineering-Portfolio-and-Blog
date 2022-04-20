import React from 'react'
import { Switch, Route } from 'react-router-dom'

import projects, { allCategories, Project } from 'Content'

import { ScrollToTop, Portfolio, NotFound, Header, SingleProject, Footer } from './components'
import { GlobalStyle, media } from 'Theme'

import styled from 'styled-components'

const sortByDate = (a: Project, b: Project) => {
    if (a.end_date === 'Ongoing') {
        return -1
    }
    if (b.end_date === 'Ongoing') {
        return 1
    }
    return Date.parse(b.end_date) - Date.parse(a.end_date)
}

const AppWrapper = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 15px auto 30px;
    box-sizing: border-box;

    ${media.tablet}{
        width: 100%;
    }
`

const App = () => {
    const [activeCategory, setActiveCategory] = React.useState(0)

    const highlightedProjectIds = [
        'diy-keyboard',
        'search-engine',
        '2d-plotter-the-final-attempts',
        'photography-portfolio-v2-0',
        'youtube-channel',
        'cribbage-board',
    ]

    const highlightedProjects = projects
        .filter(p => highlightedProjectIds.includes(p.id))
        .sort((a, b) => highlightedProjectIds.indexOf(a.id) - highlightedProjectIds.indexOf(b.id))

    const filteredProjects = projects
        .filter(p => !highlightedProjectIds.includes(p.id))
        .filter(p => activeCategory === 0 || p.categories.includes(activeCategory))
        .sort((a, b) => sortByDate(a, b))

    return (
        <>
            <ScrollToTop />
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={props => <Portfolio setActiveCategory={setActiveCategory} {...props} filteredProjects={filteredProjects} highlightedProjects={highlightedProjects} />}
                    />
                    <Route
                        path="/project/:id"
                        render={props => <SingleProject {...props} projects={[...highlightedProjects, ...filteredProjects]} />}
                    />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </AppWrapper>
        </>
    )
}

export default App
