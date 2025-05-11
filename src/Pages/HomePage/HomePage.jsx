
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';





export default function HomePage() {

    const [images, setImages] = useState();
    const [backgroundImage, setBackgroundImage] = useState();
    const [loading, setLoading] = useState(true);

 

    useEffect(() => {

        async function loadBackgroundImage(){
            const { data, error } = await supabase.storage.from('images').getPublicUrl('backgrounds/texture-background.png');
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setImages(data.publicUrl);
            }
            setLoading(false);
        }

        async function loadImages() {
            const { data, error } = await supabase.storage.from('images').getPublicUrl('titles/roofing-magazine.png');
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setImages(data.publicUrl);
            }
            setLoading(false);
        }

        loadImages();
        loadBackgroundImage();
    }, []);

  return (
    <div className='homePageMainContainer' style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    }}> 
        <NavBar />

       <div 
        className='homePageHeading' 
        style={{ 
            backgroundImage: `url(${images})`, 
            width: '25%', 
            height: '15vh', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
            }}>

        </div>

        <div className='homePageSectionOne'>
       
        </div>
    </div>
  )
}
