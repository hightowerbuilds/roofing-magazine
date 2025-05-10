
import './HomePage.css'
import NavBar from '../../Components/NavBar/NavBar'

export default function HomePage() {
  return (
    <div className='homePageMainContainer'> 
        <NavBar />

       <div className='homePageHeading'>
        ROOFING MAGAZINE
        </div>

        <div className='homePageSectionOne'>
        <div className='homePageThumbnail'>
            thumbnail
        </div>
        <div className='homePageThumbnail'>
            thumbnail
        </div>
        <div className='homePageThumbnail'>
            thumbnail
        </div>
        <div className='homePageThumbnail'>
            thumbnail
        </div>
        </div>
    </div>
  )
}
