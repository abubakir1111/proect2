import React from 'react'
import Gourp from '../../../assets/img/testimonials/Group.png'
import building from'../../../assets/img/testimonials/building.png'
import fountain from '../../../assets/img/testimonials/fountain.png'
import bicycle from '../../../assets/img/testimonials/bicycle.png'
import testmoinals_img from '../../../assets/img/testimonials/testimonials_II.png'
import './testmoinals.scss'
function Testmoinals() {
  return (
    <div className='testmoinals-container'>
        <div className="testmoinals-contaienr-box">
            <div className="testmoinals-contaienr-text1">
                <img src={Gourp} alt="" />
                <p>Рядом исторические парки и скверы</p>
            </div>
            <div className="testmoinals-contaienr-text1">
                <img src={building} alt="" />
                <p>Полностью обустроенный</p>
            </div>
            <div className="testmoinals-contaienr-text1">
                <img src={fountain} alt="" />
                <p>10 фонтанов на территории</p>
            </div>
            <div className="testmoinals-contaienr-text1">
                <img src={bicycle} alt="" />
                <p>6 км велодорожек</p>
            </div>
        </div>
        <div className='testmoinals-img'>
            <img src={testmoinals_img} alt="" />
        </div>
    </div>
  )
}

export default Testmoinals