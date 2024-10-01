import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      })),
    )

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <header className="border-b">
        <div className="container flex items-center justify-between px-4 py-4 mx-auto">
          <h1 className="text-2xl font-bold">Ben Sooraj Mohan</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* Home */}
              <li>
                <Link to="/" className="[&.active]:font-bold">
                  {({ isActive }) => <>{isActive && "{"} Home {isActive && "}"}</>}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="[&.active]:font-bold">
                  {({ isActive }) => <>{isActive && "{"} Blog {isActive && "}"}</>}
                </Link>
              </li>
              {/* Next? */}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </React.Fragment>
  ),
})
