import React from "react";
import BoxOutlet from "./BoxOutlet/BoxOutlet";
import './OutletContent.css'
import Outlet1 from '../../../assets/img/outlet_1.png'
import Outlet2 from '../../../assets/img/outlet_2.png'
import Outlet3 from '../../../assets/img/outlet_3.png'

const OutletContent = () => {



    return (
        <div className="outletContent">
            <div className="border__header"></div>
            <div className="outlets__container">
                <BoxOutlet 
                    img={Outlet1}
                    local="Rua Armando de Barros nº1321, 
                    Botucatu, Brasil."
                    tel="(+14) 998123450"
                />
                <BoxOutlet 
                    img={Outlet2}
                    local="Rua Marechal Felipe nº253, 
                    São Paulo, Brasil."
                    tel="(+14) 998666220"
                />
                <BoxOutlet 
                    img={Outlet3}
                    local="Rua Airton Mendes nº13, 
                    Campinas, Brasil."
                    tel="(+14) 998726890"
                />
            </div>
        </div>
    )
}

export default OutletContent