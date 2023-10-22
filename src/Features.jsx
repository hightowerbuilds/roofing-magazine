import Sample from './Sample'
import Background from './images/desert.jpeg'
import Lab from './images/lab.jpeg'
export default function Features(){

    return(
<div style={{
    fontFamily: 'monospace'
}}>
<h1 style={{
    color: '#247524',
    marginLeft: 10
}}>FEATURES</h1>
<div style={{
    width: 800,
    height: 300,
    backgroundImage: `url(${Background})`,
    border: '2px solid beige',
    margin: 5
}}>
   <h1>SHINGLE SHOP</h1>
   <Sample />
</div>

<div style={{
    width: 800,
    height: 300,
    backgroundImage: `url(${Lab})`,
    border: '2px solid beige',
    margin: 5
}}>
    <h1 style={{
        color: 'beige'
    }}>METAL PANELS</h1>
</div>
</div>
    ) 

}