
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';





export default function HomePage() {

    const [images, setImages] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState();
    const [loading, setLoading] = useState(true);

 

    useEffect(() => {

  
        async function loadImages() {
            const { data, error } = await supabase.storage.from('images').getPublicUrl('titles/Sketches.png');
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setImages(data.publicUrl);
            }
            setLoading(false);
        }

        loadImages();
    }, []);

    useEffect(() => {
        async function loadBackgroundImage() {
            const { data, error } = await supabase.storage.from('images').getPublicUrl('backgrounds/volcano-background.png');
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setBackgroundImage(data.publicUrl);
            }
            setLoading(false);
        }

        loadBackgroundImage();
    }
    , []);

  return (

    <>
    <NavBar />
     <div 
        className='homePageMainContainer' 
        style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
    }}> 
        

       <div 
        className='homePageHeading' 
        style={{ 
            backgroundImage: `url(${images})`, 
            width: '50%', 
            height: '50vh', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>
        </div>

      
    </div>
    </>
   
  )
}
