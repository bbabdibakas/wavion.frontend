import { Navbar } from "widgets/Navbar"
import cls from './MainPage.module.scss'

const MainPage = () => {
    return (
        <div className={cls.MainPage}>
            <Navbar />
            MainPage
        </div>
    )
}

export default MainPage