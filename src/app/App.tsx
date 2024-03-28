import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

const App = () => {
    return (
        <div className='app'>
            <div className="wrapper">
                <div>
                    Sidemenu
                </div>
                <div>
                    <Link to={'/'}>main</Link>
                    <Link to={'/profile'}>profile</Link>
                    <Suspense fallback={'Loading...'}>
                        <Routes>
                            <Route path='/' element={<MainPage />} />
                            <Route path='/profile' element={<ProfilePage />} />
                            <Route path='/*' element={<NotFoundPage />} />
                        </Routes>
                    </Suspense>
                </div>
                <div>
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default App