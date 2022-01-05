import { ILink } from "./interfaces";

const Links = ({ links }: { links: ILink[] }) => {


  return (
    <section className='Links'>
      <div className='portfolio-icon'>
        <span className="material-icons">
          link
        </span>
      </div>

      <h2>Miscellaneous links</h2>
      <ul>
        {links.map(({ name, url }) => <li key={name}>
          <a href={url} target='_blank' rel="noreferrer">{name}</a><br />
        </li>)}
      </ul>
    </section>
  );
};

export default Links;