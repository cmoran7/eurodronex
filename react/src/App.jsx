import { Toaster } from '@/components/ui/toaster'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import PageNotFound from './lib/PageNotFound'
import { AuthProvider, useAuth } from '@/lib/AuthContext'
import UserNotRegisteredError from '@/components/UserNotRegisteredError'
import ScrollToTop from './components/ScrollToTop'
// Add page imports here
import SiteLayout from '@/components/layout/SiteLayout'
import Home from '@/pages/Home'
import Services from '@/pages/Services'
import ServiceDetail from '@/pages/ServiceDetail'
import Engineering from '@/pages/Engineering'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Blog from '@/pages/Blog'
import BlogPost from '@/pages/BlogPost'
import Videos from '@/pages/Videos'
import Cases from '@/pages/Cases'
import CaseDetail from '@/pages/CaseDetail'
import Pathologies from '@/pages/Pathologies'
import PathologyDetail from '@/pages/PathologyDetail'
import Sectors from '@/pages/Sectors'
import SectorDetail from '@/pages/SectorDetail'
import Technology from '@/pages/Technology'
import Deliverables from '@/pages/Deliverables'
import Knowledge from '@/pages/Knowledge'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgotPassword from '@/pages/ForgotPassword'
import ResetPassword from '@/pages/ResetPassword'
import ProtectedRoute from '@/components/ProtectedRoute'
import AdminBlog from '@/pages/AdminBlog'

const AuthenticatedApp = () => {
	const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } =
		useAuth()

	// Show loading spinner while checking app public settings or auth
	if (isLoadingPublicSettings || isLoadingAuth) {
		return (
			<div className='fixed inset-0 flex items-center justify-center'>
				<div className='w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin'></div>
			</div>
		)
	}

	// Handle authentication errors
	if (authError) {
		if (authError.type === 'user_not_registered') {
			return <UserNotRegisteredError />
		} else if (authError.type === 'auth_required') {
			// Redirect to login automatically
			navigateToLogin()
			return null
		}
	}

	// Render the main app
	return (
		<Routes>
			{/* Add your page Route elements here */}
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/forgot-password' element={<ForgotPassword />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route
				element={
					<ProtectedRoute
						unauthenticatedElement={<Navigate to='/login' replace />}
					/>
				}
			>
				<Route path='/admin/blog' element={<AdminBlog />} />
			</Route>
			<Route element={<SiteLayout />}>
				<Route path='/' element={<Home />} />
				<Route path='/servicios' element={<Services />} />
				<Route path='/servicios/:slug' element={<ServiceDetail />} />
				<Route path='/ingenieria' element={<Engineering />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacto' element={<Contact />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/blog/:slug' element={<BlogPost />} />
				<Route path='/videos' element={<Videos />} />
				<Route path='/casos-de-estudio' element={<Cases />} />
				<Route path='/casos-de-estudio/:slug' element={<CaseDetail />} />
				<Route path='/patologias' element={<Pathologies />} />
				<Route path='/patologias/:slug' element={<PathologyDetail />} />
				<Route path='/sectores' element={<Sectors />} />
				<Route path='/sectores/:slug' element={<SectorDetail />} />
				<Route path='/tecnologia' element={<Technology />} />
				<Route path='/entregables' element={<Deliverables />} />
				<Route path='/conocimiento' element={<Knowledge />} />
				<Route path='*' element={<PageNotFound />} />
			</Route>
		</Routes>
	)
}

function App() {
	return (
		<AuthProvider>
			<QueryClientProvider client={queryClientInstance}>
				<Router>
					<ScrollToTop />
					<AuthenticatedApp />
				</Router>
				<Toaster />
			</QueryClientProvider>
		</AuthProvider>
	)
}

export default App
