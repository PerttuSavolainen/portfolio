interface IDescriptionProps {
  description: {
    name?: string;
    bio?: string;
    location?: string;
    url?: string;
  };
}

const Description = ({ description }: IDescriptionProps) => {
  const {
    name,
    bio,
    location,
    url,
  } = description || {};

  return (
    <section className='Description'>
      <div className='portfolio-icon'>
        <span className="material-icons">
          fingerprint
        </span>
      </div>

      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Location: {location}</p>
      <p><a href={url}>Link to Github profile</a></p>
    </section>
  );
};

export default Description;