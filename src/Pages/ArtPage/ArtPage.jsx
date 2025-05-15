import NavBar from "../../Components/NavBar/NavBar";
import { supabase } from "../../services/supabase";
import { useEffect, useState } from "react";

export default function ArtPage() {

  const [ imageOne, setImageOne ] = useState();
  const [ imageTwo, setImageTwo ] = useState();
  
  useEffect(() => {
    async function loadImage() {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('sketches/eyes-in-smoke.png');
      if (error) {
        console.log('error fetching')
      } else {
        setImageOne(data.publicUrl)
      }
    }
    loadImage();
  }, [])

    useEffect(() => {
    async function loadImage() {
      const { data, error } = await supabase.storage.from('images').getPublicUrl('sketches/face-in-clouds.png');
      if (error) {
        console.log('error fetching')
      } else {
        setImageTwo(data.publicUrl)
      }
    }
    loadImage();
  }, [])


  return (
    <div style={{ margin: '2%', fontFamily: 'courier', display: 'flex', flexWrap: 'wrap'}}>
        
        <NavBar />

        this is irony at best. but trying is indeed a good time.  

<p>
      <br /><br />

      if i were a 2d object....i'd be like this last week. 
      <br /><br />
      <img style={{width: '50%',}} src={imageOne} alt="" />

      <br /><br /> 
      some nice lines. any control though? 

      <br /><br />

      <img style={{width: '50%',}} src={imageTwo} alt="" />

</p>
  
    </div>
  )
}
