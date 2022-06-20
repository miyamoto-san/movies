/**
 * @generated SignedSource<<0636ced6b504da99dedcd1cb698f212a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Species_species$data = {
  readonly id: string;
  readonly name: string | null;
  readonly " $fragmentType": "Species_species";
};
export type Species_species$key = {
  readonly " $data"?: Species_species$data;
  readonly " $fragmentSpreads": FragmentRefs<"Species_species">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Species_species",
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

(node as any).hash = "6621c5e7711a9f309f17ade2bb7f199b";

export default node;
