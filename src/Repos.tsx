import { IRecentRepo } from './interfaces';

import './Repos.css';

const Repos = ({ repositories }: { repositories: IRecentRepo[]; }) => (
  <section className='Repos'>
    <div className='portfolio-icon'>
      <span className="material-icons">
        folder
      </span>
    </div>
    <h2>Repositories</h2>
    <p>My most recent public repositories at Github.</p>
    <ul>
      {(repositories || []).map(repo => <li className='repository' key={repo.name}>
        <h3>{repo.name} <a href={repo.url} target='_blank' rel='noreferrer'>
          <span className="material-icons">
            open_in_new
          </span>
        </a></h3>
        <p>
          {repo.description}
        </p>
      </li>)}
    </ul>
  </section>
);

export default Repos;

