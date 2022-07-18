import type { NextPage } from 'next'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Error from '~/components/error'
import Container from '~/components/container'

const StoreSection = lazy(() => import('~/components/store-section'))

/*
  emulate steam's inifinite store scroll.
  easiest to fetch `sections` and render on scroll
*/

const HomePage: NextPage = () => {
  return (
    <>
      <div>
        <ErrorBoundary fallback={ <Error>Unable to load content.</Error> }>
          <Suspense fallback={ <p>Loading...</p> }>
            <StoreSection contentId="12345" />
          </Suspense>
        </ErrorBoundary>
      </div>

      <div>
        <ErrorBoundary fallback={ <Error>Unable to load content.</Error> }>
          <Suspense fallback={ <p>Loading...</p> }>
            <StoreSection contentId="67890" />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}

export default HomePage