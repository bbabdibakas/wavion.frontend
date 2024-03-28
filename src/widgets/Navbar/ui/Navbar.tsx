import { BugButton } from 'widgets/BugButton'
import cls from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <BugButton />
        </div>
    )
}

export default Navbar