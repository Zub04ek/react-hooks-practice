import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(({ id, flag }) => (
        <Link to={`/country/${id}`} key={id}>
          <GridItem>
            <img src={flag} alt={id} />
            <p>{id}</p>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
