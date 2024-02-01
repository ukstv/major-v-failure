import {CeramicClient} from "@ceramicnetwork/http-client";
import {ModelInstanceDocument} from "@ceramicnetwork/stream-model-instance";

const client = new CeramicClient()
const instance = ModelInstanceDocument.load(client, 'foo')