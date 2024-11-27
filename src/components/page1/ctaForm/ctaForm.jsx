import React from 'react'
import './ctaForm.scss'
function CtaForm() {
  return (
    <div className='ctaform-container'>
        <div className="ctaform-cotainer-box">
            <div className="ctaform-container-text">
                <p>Есть вопросы?</p>
                <p>*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
            </div>
            <div className="ctaform-container-button">
                <input type="text" placeholder='Ваше имя'/>
                <input type="text" placeholder='Ваш телефон'/>
                <button>Посмотреть район</button>
            </div>
        </div>
    </div>
  )
}

export default CtaForm