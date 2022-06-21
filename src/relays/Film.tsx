import { useFragment, graphql } from "react-relay";
import {
  CardContainer as Container,
  Row,
  Col,
  ReleaseDate,
  Name,
  ReadMore,
} from "../styles";
import { Film_film$key } from "./__generated__/Film_film.graphql";
import { format } from "date-fns";
import { useState } from "react";

type Props = {
  film: Film_film$key | null;
};

const Film = ({ film }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleReadMore = () => {
    setOpen(!isOpen);
  };

  const data = useFragment(
    graphql`
      fragment Film_film on Film {
        id
        title
        director
        releaseDate
        openingCrawl
        speciesConnection {
          species {
            name
          }
        }
        starshipConnection {
          starships {
            name
            model
          }
        }
      }
    `,
    film
  );

  const species = data?.speciesConnection?.species?.map(
    (species) => species?.name
  );

  const starships = data?.starshipConnection?.starships?.map(
    (starship) => `${starship?.name} (${starship?.model})`
  );

  return (
    <Container
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 10 },
      }}
      key={data?.id}
    >
      <Row>
        <Col size={50}>
          <h1>{data?.title}</h1>
        </Col>
        <Col stretch size={50}>
          <ReleaseDate dateTime={data?.releaseDate as string}>
            {format(new Date(data?.releaseDate as string), "d MMMM, yyyy")}
          </ReleaseDate>
        </Col>
      </Row>
      <Row align="end">
        <Col size={10}>
          <strong>director</strong>
        </Col>
        <Col>
          <Name>{data?.director}</Name>
        </Col>
      </Row>
      <Row align="start">
        <Col size={10}>
          <strong>openingCrawl</strong>
        </Col>
        <Col size={90}>
          <p>{data?.openingCrawl}</p>
        </Col>
      </Row>
      {isOpen && (
        <>
          <Row align="start">
            <Col size={10}>
              <strong>species</strong>
            </Col>
            <Col size={90}>
              <p>{species?.join(", ")}</p>
            </Col>
          </Row>
          <Row align="start">
            <Col size={10}>
              <strong>starships</strong>
            </Col>
            <Col size={90}>
              <p>{starships?.join(", ")}</p>
            </Col>
          </Row>
        </>
      )}
      <Row>
        <Col size={33.33} />
        <Col justify="center" size={33.33}>
          <ReadMore onClick={handleReadMore}>
            Read {isOpen ? "less" : "more"}
          </ReadMore>
        </Col>
        <Col size={33.33} />
      </Row>
    </Container>
  );
};

export default Film;
