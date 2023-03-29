import { useMemo } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Box } from '@mui/material'

import NavBar from '@/components/navbar'
import DashBoard from '@/view/dashboard'
import Predictions from '@/view/predictions'

function App() {
    const theme = useMemo(() => createTheme(themeSettings), [])

    return (
        <div className='app'>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Box
                        width='100%'
                        height='100%'
                        padding='1rem 2rem 4rem 2rem'
                    >
                        <NavBar />
                        <Routes>
                            <Route path='/' element={<DashBoard />} />
                            <Route
                                path='/predictions'
                                element={<Predictions />}
                            />
                        </Routes>
                    </Box>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    )
}

export default App
