import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [country, setCountry] = useState({});
  const { countryId } = useParams();

  useEffect(() => {
    const getCountry = async () => {
      try {
        const data = await fetchCountry(countryId);
        console.log('data', data);
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
        <h2>Country</h2>
      </Container>
    </Section>
  );
};
