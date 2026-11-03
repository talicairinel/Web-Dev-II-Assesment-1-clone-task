import './Article.css';

/**
 * The main article: big title, large intro paragraph, then the body text
 * flowing through three CSS columns.
 */
export default function Article({ title, subtitle, intro, sections }) {
  return (
    <article className="article">
      <h1 className="article__title">
        {title}
        <span className="article__subtitle">{subtitle}</span>
      </h1>

      {/* First paragraph is set larger */}
      <p className="article__intro">{intro}</p>

      <div className="article__columns">
        {sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((text, j) => (
              <p key={j}>{text}</p>
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
