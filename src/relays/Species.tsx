import { useFragment, graphql } from "react-relay";
import { Species_species$key } from "./__generated__/Species_species.graphql";

type Props = {
  speciesRefs: Species_species$key | null;
};

const Species = ({ speciesRefs }: Props) => {
  const data = useFragment(
    graphql`
      fragment Species_species on Species {
        id
        name
      }
    `,
    speciesRefs
  );

  return <li key={data?.id}>{data?.name}</li>;
};

export default Species;
