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
                        <div className="label_sms">
                        Введите 4 цифры из сообщения, которое мы отправили на ваш телефон
                        </div>
                            <div className="code_aligner">
                                <input type="number" className="sms_digit_input" />
                                <input type="number" className="sms_digit_input" />
                                <input type="number" className="sms_digit_input" />
                                <input type="number" className="sms_digit_input" />
                            </div>
                        <div className="button_labels_aligner">
                            <div className="label_register_steps">
                                    2/2
                            </div>
                            <div className="label_register_suggest_b">
                                    Еще не зарегистрированы?
                            </div>
                        </div>
                        <div className="button_cluster_aligner">

                            <Link to="/home">
                                <button className="reg_proceed">
                                    Завершить
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