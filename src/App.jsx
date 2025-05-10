import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ArtPage from './Pages/ArtPage/ArtPage'
import GamesPage from './Pages/GamesPage/GamesPage'

	export default function App(){
		return (
			<Routes>
				<Route path="/" element={<HomePage />} />
        		<Route path="/blog" element={<BlogPage />} />
				<Route path='/art' element={<ArtPage />} />
				<Route path='/games' element={<GamesPage />} />
			</ Routes>
		)
	}

