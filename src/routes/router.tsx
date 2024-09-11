import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/root/RootLayout';
import { Root } from '../pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Root />,
      },
    ],
  },
]);
