import './index.css'
import { useMemo } from "react"
import { GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';


function Map(){

const center = useMemo(() => ({lat: 48.21, lng: -122.68}), [])
   
return  (
    <div>
        <div style={{
            width: 800,
            height: 200,
            backgroundColor: 'beige',
            margin: 10,
            fontFamily: 'monospace',
            color: '#242424'
        }}> 
        <h1 style={{marginLeft: 20}}>From the Roof of the World</h1>
        <p style={{marginLeft: 20}}>Stories from Mazatlan</p>
        <li style={{marginLeft: 50}}><a href='https://wwww.amazon.com'>Mudding Roof Morning</a></li>
        <li style={{marginLeft: 50}}>Mexico May Never Leak Again</li>
        
        <p style={{marginLeft: 20}}>Roofing over the Pandemic</p>
        <p style={{marginLeft: 20}}>Wuhan Lab, believe it or not, needs a roof</p>
        </div>
       

    <GoogleMap zoom={10} center={center} mapContainerClassName='map'>

    <Marker position={center}/>
    
    </GoogleMap>
    </div>
   
    )
}

export default function WorldNews(){

    const { isLoaded } = useLoadScript({googleMapsApiKey: 'AIzaSyD05eVSura_VEKmhs-KvGBxZlU9Yftht2c'})

    if ( isLoaded ) return <div><Map/></div>
    
}