/**
 * @generated SignedSource<<9f74bbf5c23c95f45349bdb0812fff47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmListByReleaseDate_films$data = ReadonlyArray<{
  readonly id: string;
  readonly releaseDate: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
  readonly " $fragmentType": "FilmListByReleaseDate_films";
}>;
export type FilmListByReleaseDate_films$key = ReadonlyArray<{
  readonly " $data"?: FilmListByReleaseDate_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmListByReleaseDate_films">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmListByReleaseDate_films",
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
      "name": "releaseDate",
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

(node as any).hash = "34431646ff06a3ef2b04de2dc91384fc";

export default node;
