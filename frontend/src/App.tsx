import { Box, useMediaQuery } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import MDXWrapper from './components/MDXProvider'
import Router from './components/Router'
import Scroll from './components/Scroll'
import Sidebar, { DesktopSidebarContent } from './components/Sidebar'
import SiteTitle from './components/SiteTitle'
import AppThemeProvider from './styles/Theme'

const App = () => {
  const isDesktop = useMediaQuery(`(min-width:1200px)`)

  if (isDesktop) {
    return (
      <AppThemeProvider>
        <Box sx={{ display: 'flex' }}>
          <DesktopSidebarContent />
          <Box sx={{ flex: 1 }}>
            <Sidebar />
            <SiteTitle />
            <Router />
            <Box sx={{ height: '50px' }} /> {/* Spacer for bottom */}
          </Box>
        </Box>
      </AppThemeProvider>
    )
  }

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
