import locationLogo from './assets/location-logo.png'

function Card(props){

    return( 
            <div className="card--container">
                <img className="card--pic" src={props.imageUrl}></img>

                <div className="card--info-container">
                    <div className="card--location-container">
                            <img className="card--loc-logo" src={locationLogo} />
                            <h3 className='card--location'>{props.location}</h3>
                            <a className='card--map-link' href={props.googleMaoUrl}>View on Google Maps</a>
                    </div>

                    <div className='card--title'>{props.title}</div>
                    <div className='card--date'>{props.startData} - {props.endData}</div>
                    <div className='card--desc'>{props.description}</div>
                </div>
            </div>
    )
}

export default Card