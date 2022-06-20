/**
 * @generated SignedSource<<6b5062f1c28b10c848171776e87e2750>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmListByDirector_films$data = ReadonlyArray<{
  readonly id: string;
  readonly director: string | null;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
  readonly " $fragmentType": "FilmListByDirector_films";
}>;
export type FilmListByDirector_films$key = ReadonlyArray<{
  readonly " $data"?: FilmListByDirector_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmListByDirector_films">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmListByDirector_films",
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
      "name": "director",
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

(node as any).hash = "a7d9395439c78f6e378ff684eeee6dba";

export default node;
