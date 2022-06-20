import logo from "./logo.svg";
import { useLazyLoadQuery, graphql } from "react-relay";
import { AppQuery } from "./__generated__/AppQuery.graphql";
import Film from "./relays/Film";

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
    <div className="App">
      <header className="App-header">
        <p>Filmer</p>
        <ul>
          {films.map((film) => (
            <Film key={film?.id} film={film ?? null} />
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
