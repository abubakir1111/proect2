import './appartments.scss';
import appartments_img_absolute from '../../../assets/img/appartments/appartments-III.png';
import { useContext } from 'react';
import { AppContext } from '../../../context/Context';
function Appartments() {
  const context_ref = useContext(AppContext)
  console.log(context_ref);
  return (
    <div className="appartments-container" ref={context_ref.divRef}> 
      <img src={appartments_img_absolute} alt="Appartments" className="appartments_img_absolute" />
      <div className="appartments-container-box">
        <div className="appartments-text-container">
          <p>Наши квартиры</p>
        </div>
        <div className="appartments-img-container">
          <div className="appartments-img-div1">
            <div className="appartments-element-img-div1">
              <p>Лофт — 3 этажа</p>
            </div>
            <div className="appartments-element-img-div2">
              <p>Лофт — 2 этажа</p>
            </div>
          </div>
          <div className="appartments-img-div2">
            <div className="appartments-element-img-div1">
              <p>Лофт — 2 этажа</p>
            </div>
            <div className="appartments-element-img-div2">
              <p>Лофт — 3 этажа</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Appartments;
