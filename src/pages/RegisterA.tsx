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
                <div className="auth_card_large">
                    <div>
                    <img src={authLogo} alt="" className="auth_logo" />
                                <div className='auth_greeting'>
                                    Добро пожаловать!
                                </div>
                        <div className="column_aligner">
                            <div className='reg_column_a'> 
                                <div className="auth_label_login">
                                    Телефон / Почта
                                </div>
                                <input type="text" className="auth_input" />
                                <div className="auth_label_login">
                                    Придумайте пароль
                                </div>
                                <input type="password" className="auth_input" />
                            </div>
                            <div className='reg_column_b'>
                                <div className="auth_label_login">
                                    Придумайте ник, или введите ваше имя
                                </div>
                                <input type="text" className="auth_input" />
                                <div className="auth_label_login">
                                    Ваш регион
                                </div>
                                <input type="text" className="auth_input" />
                            </div>
                        </div>
                        <div className="button_labels_aligner">
                            <div className="label_register_steps">
                                    1/2
                            </div>
                            <div className="label_register_suggest_b">
                                    Еще не зарегистрированы?
                            </div>
                        </div>
                        <div className="button_cluster_aligner">

                            <Link to="/registerb">
                                <button className="reg_proceed">
                                    Далее
                                </button>
                            </Link>
                            <div>

                                <Link to="/login">
                                    <button className="reg_login">
                                        Войти
                                    </button>
                                </Link>
                            </div>
                        </div>    
                        {/* <Link to="/home" className='link_back_to_main'> <u>{'На главную >>>'} </u> </Link> */}
                    </div>
            </div>
            </div> 
        </div>

    )
}