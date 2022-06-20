/**
 * @generated SignedSource<<b634901d250e804641a7a2adc3140837>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmDetails_filmQuery$variables = {
  filmId: string;
};
export type FilmDetails_filmQuery$data = {
  readonly film: {
    readonly title: string | null;
    readonly episodeID: number | null;
    readonly director: string | null;
    readonly speciesConnection: {
      readonly species: ReadonlyArray<{
        readonly name: string | null;
      } | null> | null;
    } | null;
    readonly " $fragmentSpreads": FragmentRefs<"FilmDetailsReleaseDate_film">;
  } | null;
};
export type FilmDetails_filmQuery = {
  variables: FilmDetails_filmQuery$variables;
  response: FilmDetails_filmQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "filmId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "filmId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "episodeID",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "director",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FilmDetails_filmQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FilmDetailsReleaseDate_film"
          },
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilmDetails_filmQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Film",
        "kind": "LinkedField",
        "name": "film",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
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
                  (v5/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "78a89ac8b641d4fc912c650aaf45f872",
    "id": null,
    "metadata": {},
    "name": "FilmDetails_filmQuery",
    "operationKind": "query",
    "text": "query FilmDetails_filmQuery(\n  $filmId: ID!\n) {\n  film(id: $filmId) {\n    ...FilmDetailsReleaseDate_film\n    title\n    episodeID\n    director\n    speciesConnection {\n      species {\n        name\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment FilmDetailsReleaseDate_film on Film {\n  releaseDate\n}\n"
  }
};
})();

(node as any).hash = "74b4fdf1e17e7a2657715ae98f3f36bc";

export default node;
