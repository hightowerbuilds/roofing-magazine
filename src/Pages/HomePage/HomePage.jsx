
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useEffect, useState } from 'react';
import { supabase } from '../../services/supabase';
import { useState } from 'react';






export default function HomePage() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    function fetchImages() {
    return supabase
        .from('images') // Replace 'images' with your table name
        .select('*');
}

    useEffect(() => {

        async function loadImages() {
            const { data, error } = await fetchImages();
            if (error) {
                console.error('Error fetching images:', error);
            } else {
                setImages(data);
            }
            setLoading(false);
        }

        loadImages();
    }, []);

  return (
    <div className='homePageMainContainer'> 
        <NavBar />

       <div className='homePageHeading'>
        ROOFING MAGAZINE
        </div>

        <div className='homePageSectionOne'>
       
        </div>
    </div>
  )
}
