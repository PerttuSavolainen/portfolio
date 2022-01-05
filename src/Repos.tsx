import { IRecentRepo } from './interfaces';

import './Repos.css';

const Repos = ({ repos }: { repos: IRecentRepo[]; }) => (
  <section className='Repos'>
    <div className='portfolio-icon'>
      <span className="material-icons">
        folder
      </span>
    </div>
    <h2>Repositories</h2>
    <p>My most recent public repositories at Github.</p>
    <ul>
      {repos.map(repo => <li className='repository' key={repo.name}>
        <h3>{repo.name} <a href={repo.link} target='_blank' rel='noreferrer'>
          <span className="material-icons">
            open_in_new
          </span>
        </a></h3>
        <p>
          {repo.desc}
        </p>
      </li>)}
    </ul>
  </section>
);

export default Repos;

