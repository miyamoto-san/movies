/**
 * @generated SignedSource<<729eb4aab8afc26e15ddb2b2479d0c65>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmEditor_films$data = ReadonlyArray<{
  readonly id: string;
  readonly title: string | null;
  readonly releaseDate: string | null;
  readonly director: string | null;
  readonly " $fragmentType": "FilmEditor_films";
}>;
export type FilmEditor_films$key = ReadonlyArray<{
  readonly " $data"?: FilmEditor_films$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmEditor_films">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmEditor_films",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "director",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "5f91e62f8645149c463ccdf8106c9016";

export default node;
