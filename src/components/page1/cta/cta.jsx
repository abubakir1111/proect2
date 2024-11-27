import React from 'react'
import './cta.scss'
function Cta() {
    return (
        <div className='cta-container'>
            <div className="cta-container-box">
                <div className="cta-text">
                    <p>Хотите посмотреть?</p>
                    <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.</p>
                </div>
                <div className="cta-button">
                    <div className="cta-button-div">
                        <input type="text" placeholder='Ваше имя'/>
                        <input type="text" placeholder='Ваш телефон'/>
                    </div>
                    <div className="cta-button-text-div">
                        <p>*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                        <button>Посмотреть район</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta