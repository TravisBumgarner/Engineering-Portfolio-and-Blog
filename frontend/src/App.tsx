import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import MDXWrapper from './components/MDXProvider'
import Router from './components/Router'
import Scroll from './components/Scroll'
import Sidebar from './components/Sidebar'
import SiteTitle from './components/SiteTitle'
import AppThemeProvider from './styles/Theme'

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: 'warning.main',
        color: 'warning.contrastText',
        textAlign: 'center',
        py: 1,
        height: '50px'
      }}
    >
      Heads up - I am currently rewriting the entire website so things might be a little broken.
    </Box>
  )
}

const App = () => {
  return (
    <AppThemeProvider>
      <Sidebar />
      <SiteTitle />
      <Router />
      <Box sx={{ height: '50px' }} /> {/* Spacer for bottom */}
    </AppThemeProvider>
  )
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <MDXWrapper>
          <Banner />
          <App />
          <Scroll />
        </MDXWrapper>
      </AppThemeProvider>
    </BrowserRouter>
  )
}

export default WrappedApp