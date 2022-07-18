import type { StoreSectionContent } from '~/types/store';
import useSWR from 'swr';
import { BASE_URL } from '~/lib/constants';
import { CaretRight } from 'phosphor-react';
import Container from './container';
import GamePreview from './game-preview';
import Link from 'next/link';

const StoreSection = ({ contentId }: { contentId: string }) => {
  const { data, isValidating } = useSWR<StoreSectionContent>(`${ BASE_URL }/api/store?section=${contentId}`, { suspense: true })

  if (!isValidating) {
    return (
      <section>
        <Container>
          <h2 className="my-4 flex space-x-1">
            <span className="text-3xl font-bold capitalize">
              { (typeof data.href !== "undefined") 
                ? (
                  <Link href={ data.href }>
                    <a>{ data.title }</a>
                  </Link>
                  ) 
                : data.title 
              }
            </span>
            <span className="mt-3.5">
              <CaretRight size={ 16 } aria-hidden={ true } weight="bold" />
            </span>
          </h2>
          <div className="flex space-x-4">
            { data.content.length > 0 && data.content.map((game) => (
              <GamePreview key={ game.title } game={ game } />
            )) }
          </div>
        </Container>
      </section>
    )
  }

  return null
}

export default StoreSection