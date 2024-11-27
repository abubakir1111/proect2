import React from 'react'
import './rectangle.scss'
import rectangle_logo from '../../../assets/img/rectangle/first-screen__logo.svg'
import youtube_icon from '../../../assets/img/rectangle/Vector.png'
import w_icons from '../../../assets/img/rectangle/Group(1).png'
import facekbook_icon from '../../../assets/img/rectangle/facebook-logo.png'
import instagaram_icon from '../../../assets/img/rectangle/instagram.png'
function Rectangel() {
    return (
        <div className='rectangle-container'>
            <div className="rectabgle-container-box">
                <div className="rectangle-container-box-logo-div">
                    <img src={rectangle_logo} alt="" />
                </div>
                <div className="rectangle-container-box-text-div1">
                    <p>О комплексе</p>
                    <p>Район</p>
                    <p>Каталог квартир</p>
                    <p>Ипотека</p>
                    <p>Контакты</p>
                </div>
                <div className="rectangle-container-box-text-div2">
                    <p>О комплексе</p>
                    <p>Район</p>
                    <p>Каталог квартир</p>
                    <p>Ипотека</p>
                    <p>Контакты</p>
                </div>
                <div className="rectangle-container-box-div-info">
                    <p>Адрес: Наб. реки Фонтанки 10-15</p>
                    <p>Телефон: 8 (812) 123-45-67</p>
                    <p>Отдел продаж: 10:00 - 20:00</p>
                    <p>E-mail: <span>vip@housevip.ru</span></p>
                    <div className='rectangle-container-box-div-info-img'>
                        <img src={youtube_icon} alt="" />
                        <img src={w_icons} alt="" />
                        <img src={facekbook_icon} alt="" />
                        <img src={instagaram_icon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rectangel