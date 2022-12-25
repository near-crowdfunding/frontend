import { AbiRoot } from "near-abi";

const smartContractAbi = `{
    "schema_version": "0.3.0",
    "metadata": {
      "name": "smart-contract",
      "version": "0.1.0",
      "build": {
        "compiler": "rustc 1.68.0-nightly",
        "builder": "cargo-near 0.3.0"
      },
      "wasm_hash": "3PYouov29acSfdnG6HYazGkB2DdnW41GULSs8rMtZzAE"
    },
    "body": {
      "functions": [
        {
          "name": "get_status",
          "kind": "view",
          "params": {
            "serialization_type": "json",
            "args": [
              {
                "name": "account_id",
                "type_schema": {
                  "$ref": "#/definitions/AccountId"
                }
              }
            ]
          },
          "result": {
            "serialization_type": "json",
            "type_schema": {
              "type": [
                "string",
                "null"
              ]
            }
          }
        },
        {
          "name": "set_status",
          "kind": "call",
          "params": {
            "serialization_type": "json",
            "args": [
              {
                "name": "message",
                "type_schema": {
                  "type": "string"
                }
              }
            ]
          }
        }
      ],
      "root_schema": {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "title": "String",
        "type": "string",
        "definitions": {
          "AccountId": {
            "type": "string"
          }
        }
      }
    }
  }`;

export const abiSchema: AbiRoot = JSON.parse(smartContractAbi);
