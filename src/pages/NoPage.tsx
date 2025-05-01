import Header from '../components/layout/header/Header'
import { Link } from 'react-router-dom'

export default function NoPage() {
    return (
        <>
        <h1>
            {'Такой страницы не существует :('}
        </h1>
        <Link to='/Home'>
        <h1>
            {'Вернуться на главную >'}
        </h1>
        </Link>
            
        </>
    )
}