import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/country-service';

export const CountrySearch = () => {
  const [query, setQuery] = useState('');
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') return;

    const fetchCountries = async () => {
      try {
        const data = await fetchByRegion(query);
        setCountries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCountries();
  }, [query]);

  const handleOnSubmit = value => {
    setQuery(value);
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={handleOnSubmit} />

        <CountryList countries={countries} />
        {loading && <Loader />}
        {error && <Heading> {error} </Heading>}
      </Container>
    </Section>
  );
};
