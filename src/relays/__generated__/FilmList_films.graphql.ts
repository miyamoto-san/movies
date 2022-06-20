/**
 * @generated SignedSource<<60200a1471a1ec64d25b820372ecdbed>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmList_films$data = ReadonlyArray<{
  readonly speciesConnection: {
    readonly species: ReadonlyArray<{
      readonly name: string | null;
    } | null> | null;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"FilmListByTitle_films" | "FilmListByDirector_films" | "FilmListByReleaseDate_films">;
  readonly " $fragmentType": "FilmList_films";
}>;
export type FilmList_films$key = ReadonlyArray<{
  readonly " $data"?: FilmList_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmList_films">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmList_films",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmListByTitle_films"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmListByDirector_films"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "FilmListByReleaseDate_films"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FilmSpeciesConnection",
      "kind": "LinkedField",
      "name": "speciesConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Species",
          "kind": "LinkedField",
          "name": "species",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "e85ca84f80e2ce271c3fcb46e353917f";

export default node;
