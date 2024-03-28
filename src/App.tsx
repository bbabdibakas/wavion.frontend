import { Link, Route, Routes } from 'react-router-dom'
import cls from './App.module.scss'
import MainPage from './pages/MainPage'
import ProfilePage from './pages/ProfilePage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
    return (
        <div className={cls.App}>
            <div className="wrapper">
                <div>
                    Sidemenu
                </div>
                <div>
                    <Link to={'/'}>main</Link>
                    <Link to={'/profile'}>profile</Link>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/profile' element={<ProfilePage />} />
                        <Route path='/*' element={<NotFoundPage />} />
                    </Routes>
                </div>
                <div>
                    Sidebar
                </div>
            </div>
        </div>
    )
}

export default App