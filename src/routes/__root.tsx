import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
      <div className="flex gap-2 p-2">
        <Link to="/" className="no-underline">
          {({ isActive }) => <>{isActive && "{"} Home {isActive && "}"}</>}
        </Link>{' '}
      </div>
      <Outlet />
    </React.Fragment>
  ),
})
