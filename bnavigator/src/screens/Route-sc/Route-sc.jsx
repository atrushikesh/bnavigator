import React from 'react'
import './Route-sc.css'
import { Input,Switch } from '../../components'
import home_map from '../../assets/Home-map.png'
import { Link } from 'react-router-dom'

const Route_sc = () => {
    return(
        <>
        <div className="container-2475-dark">
            <div className="section-flex-row-sb">
                <div className="section-flex-row btn-toggle-container">
                    <div className="btn-toggle-on">
                        <h3 className="title-desc-dark b2 l1">Home</h3>
                    </div>
                    <Link to={"/Route-destination"} >
                    <div className="btn-toggle-off">
                        <p className="title-desc-primary b2 l1">Destination</p>
                    </div>
                    </Link>
                </div>

                <div className="btn-toggle-off">
                    <h3 className="title-desc-secondary b2 l1">Change</h3>
                </div>
            </div>

            <Input className={"input-default"} id={"destination_address"} name={"destination-address"} type={"text"} placeholder={"2-4-118, KKR Colony, Uppal, Hyderabad"} />

            <img className='map-img' src={home_map} alt="Map" />
            <Switch />
        </div>

        </>
    )
}

export default Route_sc