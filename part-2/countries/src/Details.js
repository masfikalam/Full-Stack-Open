import Weather from "./Weather";

const Details = ({ country }) => {
  const flag = country.flags[1];
  const title = country.name.common;
  const capital = country.capital[0];
  const languages = Object.values(country.languages);

  return (
    <div>
      <h2>{title}</h2>
      <p>capital {capital}</p>
      <h4>languages</h4>
      <ul>
        {languages.map((ln) => (
          <li key={ln}>{ln}</li>
        ))}
      </ul>
      <img src={flag} alt="country" width="200" />

      <Weather title={title} />
    </div>
  );
};

export default Details;
