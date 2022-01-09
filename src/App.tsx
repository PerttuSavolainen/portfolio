import { useEffect, useState } from 'react';

import { ILink, IRecentRepo } from './interfaces';

import logoLayer1 from './logo-layer1.png';
import logoLayer2 from './logo-layer2.png';
import logoLayer3 from './logo-layer3.png';
import logoLayer4 from './logo-layer4.png';

import './App.css';

import Description from './Description';
import Repos from './Repos';
import Links from './Links';
import Buzzwords from './Buzzwords';
// import { debounce } from './util';

const App = () => {
  const [description, setDescription] = useState({});
  const [buzzwords, setBuzzwords] = useState([] as string[]);
  const [recentRepos, setRecentRepos] = useState([] as IRecentRepo[]);

  // TODO: get these from somewhere and remove hardcoded ones.
  const links: ILink[] = [
    {
      name: 'CV at resume.io',
      url: 'https://resume.io/r/MW2liunvi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/perttu-savolainen-06082a137/',
    },
    {
      name: 'Github',
      url: 'https://github.com/PerttuSavolainen',
    },
  ];

  // TODO: follow scroll position and animate based on that
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const handleScroll = debounce(() => {
  //   const pos = window.scrollY;
  //   console.debug(pos);
  //   setScrollPosition(pos);
  // }, 10, false);

  // useLayoutEffect(() => {
  //   window.addEventListener('scroll', handleScroll)

  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [scrollPosition]);


  // fetch data
  useEffect(() => {
    const fetchPortfolioData = async () => {
      return fetch(process.env.REACT_APP_BACKEND_ENDPOINT as string)
        .then(res => res.json());
    };

    const fetchData = async () => {
      try {
        const { topics, repositories, ...description } = await fetchPortfolioData();

        setDescription(description);
        setBuzzwords(topics);
        setRecentRepos(repositories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="header">
        <div className='logo-wrapper header-item'>
          {[
            logoLayer1,
            logoLayer2,
            logoLayer3,
            logoLayer4,
          ].map((layer, index) => {
            return <img
              src={layer}
              key={layer}
              className="logo-layer"
              alt={`logo layer ${index + 1}`}
            // style={{
            //   transform: `translateY(${(scrollPosition * index) / 25}px)`
            // }}
            />
          })
          }
        </div>
        <h1 className='header-item'>
          Programming<br />with <span>heart.</span>
        </h1>
      </header>
      <main className='content'>
        <div className='sections'>
          <div className='border'>
            <Description description={description} />
            <Buzzwords buzzwords={buzzwords} />
            <Repos repositories={recentRepos} />
          </div>
          <Links links={links} />
        </div>
      </main>
    </div>
  );
}

export default App;
