import Link from "next/link";

export interface ContentCardProps {
  appId: string;
 }

const ContentCard = ({ appId }: ContentCardProps) => {
  return (
    <article className="h-full snap-start">
      <h3>
        <Link href={ "#" }>
          <a>
            { "Lorem Ipsum" }
          </a>
        </Link>
      </h3>
      <div>
        <figure className="my-2">
          <div className="border rounded-lg shadow-sm">
            <div className="aspect-video">
              {/* Image + Href */}
            </div>
          </div>
          <figcaption className="mt-1">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </figcaption>
        </figure>
      </div>
    </article>
  )
}
export default ContentCard