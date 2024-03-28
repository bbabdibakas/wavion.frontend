import { Link } from 'react-router-dom'
import cls from './Sidemenu.module.scss'

const Sidemenu = () => {
    return (
        <div className={cls.Sidemenu}>
            <Link to={'/'}>main</Link>
            <Link to={'/profile'}>profile</Link>
        </div>
    )
}

export default Sidemenu