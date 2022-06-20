/**
 * @generated SignedSource<<c5e999f723db885842e2fe53b6c49d03>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmListFilter_species$data = ReadonlyArray<{
  readonly id: string;
  readonly name: string | null;
  readonly " $fragmentType": "FilmListFilter_species";
}>;
export type FilmListFilter_species$key = ReadonlyArray<{
  readonly " $data"?: FilmListFilter_species$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmListFilter_species">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "FilmListFilter_species",
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
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Species",
  "abstractKey": null
};

(node as any).hash = "8eaa939a100d2ddafbb819d2e67421d0";

export default node;
