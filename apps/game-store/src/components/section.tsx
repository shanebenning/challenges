import slugify from "~/lib/slugify";

export interface SectionProps {
  children?: React.ReactNode;
  title: string;
  [key: string]: any
}

const Section = ({
  children,
  title,
  ...rest
}: SectionProps) => {
  const sectionId: string = rest.id ?? slugify(title)

  return (
    <section id={ sectionId } { ...rest }>
      <header className="">
        <h2 id={ `${ sectionId }-title` } className="capitalize">
          { title }.
        </h2>
      </header>
      <div className="" role="list">
        { children }
      </div>
    </section>
  )
}

export default Section