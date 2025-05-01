import './Login.css'
import { Link } from 'react-router-dom';
import authBackground from '../assets/images/login_backgroundv1.jpg'
import authLogo from '../assets/icons/auth_logos.svg'
import Checkbox from '@mui/material/Checkbox';

export default function Login() {
    return (
        <div>
            <img src={authBackground} alt="" className="auth_background" />
            <div className="card_aligner">
                <div className="auth_card">
                    <div>
                        <img src={authLogo} alt="" className="auth_logo" />
                        <div className='auth_greeting'>
                            Добро пожаловать!
                        </div>
                        <div className="auth_label_login">
                            Телефон / Почта
                        </div>
                        <input type="text" className="auth_input" />
                        <div className="auth_label_login">
                            Пароль
                        </div>
                        <input type="password" className="auth_input" />
                        <div className='auth_instruments'>
                            <div className="forgot_password">
                                Забыли пароль?
                            </div>
                            <div className="remember_user">
                                Запомнить меня
                            </div>
                            <Checkbox/>
                        </div>
                        <Link to="/home">
                            <button className="auth_login">
                                Войти
                            </button>
                        </Link>
                        <div className="label_register_suggest">
                            Еще не зарегистрированы?
                        </div>
                            <Link to="/registerA">
                                <button className="auth_register">
                                    Создать аккаунт
                                </button>
                            </Link>
                        <Link to="/home" className='link_back_to_main'> <u>{'На главную >>>'} </u> </Link>
                    </div>
            </div>
            </div> 
        </div>

    )
}