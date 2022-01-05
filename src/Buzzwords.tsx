import './Repos.css';

const Buzzwords = ({ buzzwords }: { buzzwords: string[]; }) => (
  <section className='Topics'>
    <div className='portfolio-icon'>
      <span className="material-icons">
        question_answer
      </span>
    </div>

    <h2>Buzzwords</h2>
    <p>My most recently used topics at Github.</p>
    <p className='buzzwords'>
      {buzzwords.map(word => <span key={word}><span className='buzzword'>{word}</span> </span>)}
    </p>
  </section>
);

export default Buzzwords;

