import { Box, useMediaQuery } from '@mui/material'
import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import MDXWrapper from './components/MDXProvider'
import Router from './components/Router'
import Scroll from './components/Scroll'
import Sidebar, { DesktopSidebarContent } from './components/Sidebar'
import SiteTitle from './components/SiteTitle'
import { isSidebarOpen } from './signals'
import AppThemeProvider from './styles/Theme'

const App = () => {
  const isDesktop = useMediaQuery(`(min-width:900px)`)

  useEffect(() => {
    if (isDesktop) {
      isSidebarOpen.value = false
    }
  }, [isDesktop])

  if (isDesktop) {
    return (
      <AppThemeProvider>
        <Box sx={{ display: 'flex' }}>
          <DesktopSidebarContent isDesktop={true} />
          <Box sx={{ flex: 1 }}>
            <SiteTitle isDesktop={true} />
            <Sidebar isDesktop={true} />
            <Router />
            <Box sx={{ height: '50px' }} /> {/* Spacer for bottom */}
          </Box>
        </Box>
      </AppThemeProvider>
    )
  }

  return (
    <AppThemeProvider>
      <Sidebar isDesktop={false} />
      <SiteTitle isDesktop={false} />
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
