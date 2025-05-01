import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../../misc/theme_switch/ThemeSwitch';

import {
    vkLogoBW as VkIcon,
    tgLogoBW as TgIcon,
    logoIconBW as LogoIcon
} from '../../../assets/icons/icons';

const Footer = () => {
  return (
    <footer className="footer_default">
        <div className="footer_lineContent">
            <div className="footer_flex_container_aligner">
                <div className="footer_actionLabels">
                    <Link to="/about">О нас</Link>
                    <Link to="/support">Помощь</Link>
                    <Link to="/terms_and_conditions">Условия</Link>
                    <Link to="/suggestions">Предложить улучшение</Link>
                    <Link to="/settings">Настройки</Link>
                    <Link to="/forbusiness">Для бизнеса</Link>
                    <Link to="/advertisement">Реклама</Link>
                    <ThemeSwitch/>
                </div>
                <div className="footer_SMIcons">
                    <a href="#">
                    <img src={VkIcon} alt='VK'/>
                    </a>
                    <a target="blank" href="https://t.me/+XnqVi6na5642YjJi">
                    <img src={TgIcon} alt='Telegram'/>
                    </a>
                </div>
            </div>
        </div> 
        <div className="footer_lineContent_b">
            <div className="footer_flex_container_aligner_b">
                <div className="footer_legalBottom">
                    <div className="footer_legalBottomLabel">
                    © Саншайн-авто 2025
                    </div>
                    <img src={LogoIcon} alt='Logo'/>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;