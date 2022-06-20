/**
 * @generated SignedSource<<db1311a7b04e0c6eb756f96012f30221>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmListByTitle_films$data = ReadonlyArray<{
  readonly id: string;
  readonly title: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
  readonly " $fragmentType": "FilmListByTitle_films";
}>;
export type FilmListByTitle_films$key = ReadonlyArray<{
  readonly " $data"?: FilmListByTitle_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmListByTitle_films">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmListByTitle_films",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Film_film"
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "e053379d9a9732e68c11ea0bfce39ce7";

export default node;
