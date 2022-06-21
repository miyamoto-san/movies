/**
 * @generated SignedSource<<3bb1905cd8f1e474f5cde4ded1f49521>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Film_film$data = {
  readonly id: string;
  readonly title: string | null;
  readonly director: string | null;
  readonly releaseDate: string | null;
  readonly openingCrawl: string | null;
  readonly " $fragmentType": "Film_film";
};
export type Film_film$key = {
  readonly " $data"?: Film_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Film_film",
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
      "name": "director",
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
      "name": "openingCrawl",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "dbae23dc62e2b1550c59a974681e131e";

export default node;
