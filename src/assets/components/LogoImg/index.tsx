import logoImg from '../../img/Logo.svg'
import { Link } from 'react-router-dom'

export default function LogoImg() {
    return (
        <div className="mx-auto h-36 w-60 mt-8">
            <Link to="/">
                <img src={logoImg}/>
            </Link>
        </div>
    )
}