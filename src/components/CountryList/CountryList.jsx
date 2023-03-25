import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(({ id, flag }) => (
        <Link to={`/country/${id}`} key={id} state={{ from: location }}>
          <GridItem>
            <img src={flag} alt={id} />
            <p>{id}</p>
          </GridItem>
        </Link>
      ))}
    </Grid>
  );
};
