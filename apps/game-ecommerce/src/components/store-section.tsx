import type { StoreSectionContent } from '~/types/store';
import useSWR from 'swr';
import { BASE_URL } from '~/lib/constants';
import { CaretRight } from 'phosphor-react';
import Container from './container';

const StoreSection = ({ contentId }: { contentId: string }) => {
  const { data, isValidating } = useSWR<StoreSectionContent>(`${ BASE_URL }/api/store?section=${contentId}`, { suspense: true })

  if (!isValidating) {
    return (
      <section>
        <Container>
          <h2 className="flex space-x-1">
            <span className="text-xl font-semibold capitalize">
              { data.title }
            </span>
            <span className="mt-2">
              <CaretRight size={ 16 } aria-hidden={ true } weight="bold" />
            </span>
          </h2>
          <div className="">
            { data.content.length > 0 && data.content.map((game) => (
              <>
                <div>{ game }</div>
              </>
            )) }
          </div>
        </Container>
      </section>
    )
  }

  return null
}

export default StoreSection