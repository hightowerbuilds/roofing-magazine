
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';





export default function HomePage() {

    const [images, setImages] = useState();
    const [loading, setLoading] = useState(true);

 

    useEffect(() => {

        async function loadImages() {
            const { data, error } = await supabase.storage.from('images').getPublicUrl('titles')
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setImages(data.publicUrl);
            }
            setLoading(false);
        }

        loadImages();
    }, []);

  return (
    <div className='homePageMainContainer'> 
        <NavBar />

       <div className='homePageHeading'>
        <img src={images} />
        </div>

        <div className='homePageSectionOne'>
       
        </div>
    </div>
  )
}
