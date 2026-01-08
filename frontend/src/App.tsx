import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import MDXWrapper from './components/MDXProvider'
import Router from './components/Router'
import Scroll from './components/Scroll'
import Sidebar from './components/Sidebar'
import SiteTitle from './components/SiteTitle'
import AppThemeProvider from './styles/Theme'

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
          <App />
          <Scroll />
        </MDXWrapper>
      </AppThemeProvider>
    </BrowserRouter>
  )
}

export default WrappedApp
