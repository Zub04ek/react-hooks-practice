import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useRef, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();
  const location = useLocation();
  const backLink = useRef(location?.state?.from ?? '/');

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        setCountry(data);
      } catch (err) {
        console.log('err', err);
      }
    };
    getCountry();
  }, [countryId]);

  return (
    <Section>
      <Container>
        <CountryInfo
          flag={country.flag}
          capital={country.capital}
          country={country.countryName}
          id={country.id}
          languages={country.languages}
          population={country.population}
        />
        <Link to={backLink.current}>
          <button>Тицьни на мене і повернись</button>
        </Link>
      </Container>
    </Section>
  );
};
