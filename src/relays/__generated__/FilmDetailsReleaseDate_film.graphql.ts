/**
 * @generated SignedSource<<262658e7c83f990acd2e002f0e97bb7f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmDetailsReleaseDate_film$data = {
  readonly releaseDate: string | null;
  readonly " $fragmentType": "FilmDetailsReleaseDate_film";
};
export type FilmDetailsReleaseDate_film$key = {
  readonly " $data"?: FilmDetailsReleaseDate_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmDetailsReleaseDate_film">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmDetailsReleaseDate_film",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "61bb76019b473e3add08d5b3ad367936";

export default node;
