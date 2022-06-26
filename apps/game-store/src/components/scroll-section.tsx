import Section from "./section"

const ScrollSection = ({ children, title }) => (
  <Section title={ title }>
    <div className="">
      <div className="flex space-x-4 overflow-x-scroll snap-x snap-mandatory">
        { children }
      </div>
    </div>
  </Section>
)

export default ScrollSection