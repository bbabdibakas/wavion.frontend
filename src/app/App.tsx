import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Sidemenu } from 'widgets/Sidemenu'

const App = () => {
    return (
        <div className='app'>
            <div className="wrapper">
                <Sidemenu />
                <div className='content'>
                    <Suspense fallback={'Loading...'}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path='/profile' element={<ProfilePage />} />
                            <Route path='/*' element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        </div>
    )
}

export default App