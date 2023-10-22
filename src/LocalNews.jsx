import elkAttack from './images/elk_attack.jpeg'
import beachScene from './images/IMG_0369.jpeg'
export default function LocalNews(){
    return (

<>
<h3 style={{
    fontFamily: 'monospace',
    margin: 30,
    fontSize: 42,
    backgroundColor: 'orange',
    marginLeft: 10,
    marginTop: 10,
    width: 'fit-content',
    borderRadius: 2
}}>local means here A LOT</h3>

<div style={{
        display: "inline-flex",
     }}>


<div style={{
    height: 300,
    width: 300,
    backgroundColor: '#242434',
    color: 'beige',
    fontSize: 21.7,
    fontFamily: 'monospace',
    border: '1px dotted beige',
    margin: 10,
    borderRadius: 2
    
}}>
   <h4 style={{
    marginLeft: 15,
    marginTop: 10
   }}> Whidbey News-Times </h4>
    <img src={elkAttack} style={{
        border: '2px solid orange',
        margin: 15
}}/>
this elk is unhappy. 
    <a 
    style={{color: 'beige' }} 
    href='https://www.whidbeynewstimes.com/news/whidbey-elk-attacks-car-but-is-staying-put/' 
    target='_blank' rel="noreferrer"> click to find out why!
    </a>
</div>

<div style={{
    height: 300,
    width: 300,
    backgroundImage: `url(${beachScene})`,
    borderRadius: 2,
    color: 'beige',
    border: '1px dotted beige',
    margin: 10
}}>
    <a  style={{
            color: 'black',
            fontFamily: 'monospace',
            fontSize: 56
        }}
        href='https://sanjuanislander.com/news-articles/ferries' 
        target='_blank' 
        rel='noreferrer'>
        Whats Up With The Ferries?
    </a>
</div>

<div style={{
    height: 300,
    width: 300,
    backgroundColor: '#242434',
    color: 'beige',
    border: '1px dotted beige',
    margin: 10,
    borderRadius: 2
}}></div>

<div style={{
    height: 300,
    width: 300,
    backgroundColor: '#242434',
    color: 'beige',
    border: '1px dotted beige',
    margin: 10,
    borderRadius: 2
}}></div>
     </div>   

</>        
    

    )
}