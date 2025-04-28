import { createRoot } from 'react-dom/client';
import CustomRouterProvider from '@/router/RouterProvider';

createRoot(document.getElementById('root')!).render(<CustomRouterProvider></CustomRouterProvider>);
