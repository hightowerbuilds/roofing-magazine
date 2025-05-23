import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ArtPage from './Pages/ArtPage/ArtPage'
import GamesPage from './Pages/GamesPage/GamesPage'
import BadJump from './Pages/BadJumpPage/BadJump'
import JournalPage from './Pages/JournalPage/JournalPage'

	export default function App(){
		return (
			<Routes>
				<Route path="/" element={<HomePage />} />
        		<Route path="/blog" element={<BlogPage />} />
				<Route path='/art' element={<ArtPage />} />
				<Route path='/games' element={<GamesPage />} />
				<Route path='/badjumper' element={<BadJump />} />
				<Route path='/journal' element={<JournalPage />} />
			</ Routes>
		)
	}

