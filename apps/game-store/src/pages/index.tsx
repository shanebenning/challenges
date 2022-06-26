import type { NextPage } from 'next'
import Link from 'next/link'
import ContentCard from '~/components/content-card'
import ScrollSection from '~/components/scroll-section'

const HomePage: NextPage = () => {
  return (
    <>
      <h1>Welcome!</h1>

      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="my-4">
          <ScrollSection title="featured games">
           
          </ScrollSection>
        </div>

        <div className="my-4">
          <ScrollSection title="new releases">
           
          </ScrollSection>
        </div>

        {/* Sign In Banner */}
        <div className="my-12">
          <aside id="">
            <h3 className="capitalize">
              want recommendations?
            </h3>
            <p>Join now for more personalized recommendations</p>
            <div>
              <div>
                <Link href="#">
                  <a>Sign In</a>
                </Link>
                <span className="mx-1.5">or</span>
                <Link href="#">
                  <a>Sign Up</a>
                </Link>
              </div>
            </div>
          </aside>
        </div>

        <div className="my-4">
          <ScrollSection title="trending">
           
          </ScrollSection>
        </div>

        <div className="my-4">
          <ScrollSection title="recently updated">
           
          </ScrollSection>
        </div>
      </div>
    </>
  )
}

export default HomePage