/**
 * @generated SignedSource<<2c517b190fde3a6067b3432fc348ec0b>>
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
  readonly speciesConnection: {
    readonly species: ReadonlyArray<{
      readonly name: string | null;
    } | null> | null;
  } | null;
  readonly starshipConnection: {
    readonly starships: ReadonlyArray<{
      readonly name: string | null;
      readonly model: string | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "Film_film";
};
export type Film_film$key = {
  readonly " $data"?: Film_film$data;
  readonly " $fragmentSpreads": FragmentRefs<"Film_film">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
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
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "FilmStarshipsConnection",
      "kind": "LinkedField",
      "name": "starshipConnection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Starship",
          "kind": "LinkedField",
          "name": "starships",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "model",
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
})();

(node as any).hash = "a0c432cbee69cc200493ccfd3ec1d860";

export default node;
