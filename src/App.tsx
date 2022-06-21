  import logo from "./logo.svg";
import { useLazyLoadQuery, graphql } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import Film from "./relays/Film";
import Layout from "./Layout";
import { Card } from "./components";

const App = () => {
  const data = useLazyLoadQuery<AppQuery>(
    graphql`
      query AppQuery {
        allFilms {
          edges {
            node {
              id
              ...Film_film
            }
          }
        }
      }
    `,
    {}
  );

  const films = (data.allFilms?.edges ?? [])
    .map((edge) => edge?.node)
    .filter(Boolean);

  return (
    <Layout>
        <p>Filmer</p>
        <ul>
          {films.map((film) => (
            <Card>
              <Film key={film?.id} film={film ?? null} />
            </Card>
          ))}
        </ul>
    </Layout>
  );
};

export default App;
