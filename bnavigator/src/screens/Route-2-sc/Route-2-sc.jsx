import React from 'react'
import './Route-2-sc.css'
import { Input,Switch } from '../../components'
import { Link } from 'react-router-dom'
import destination_map from '../../assets/Destination-map.png'

const Route_2_sc = () => {
  return (
    <>
    <div className="container-2475-dark">
        <div className="section-flex-row-sb">
            <div className="section-flex-row btn-toggle-container">
                <Link to={"/Route"}>
                <div className="btn-toggle-off">
                    <h3 className="title-desc-primary b2 l1">Home</h3>
                </div>
                </Link>
                    <div className="btn-toggle-on">
                        <p className="title-desc-dark b2 l1">Destination</p>
                    </div>
            </div>

            <div className="btn-toggle-off">
                <h3 className="title-desc-secondary b2 l1">Change</h3>
            </div>
        </div>

        <Input className={"input-default"} id={"destination_address"} name={"destination-address"} type={"text"} placeholder={"Little Flower Degree College, Uppal, Hyderabad"} />

        <img className='map-img' src={destination_map} alt="Map" />
        <Switch />
    </div>

    </>
  )
}

export default Route_2_sc