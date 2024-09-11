import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Ben Sooraj Mohan</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* Home */}
              <li>
                <Link to="/" className="[&.active]:font-bold">
                  {({ isActive }) => <>{isActive && "{"} Home {isActive && "}"}</>}
                </Link>
              </li>
              {/* Next? */}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  ),
})
