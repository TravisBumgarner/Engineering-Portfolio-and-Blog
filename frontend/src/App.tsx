import AppThemeProvider from './styles/Theme'

import Scroll from './components/Scroll'
import Sidebar from './components/Sidebar'
import SiteTitle from './components/SiteTitle'
import { Box } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'
import Router from './components/Router'

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
        <App />
        <Scroll />
      </AppThemeProvider>
    </BrowserRouter>
  )
}

export default WrappedApp