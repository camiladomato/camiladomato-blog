import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '358081785464601bb9cd90b301bcd0bed2a73e26', queries,  });
export default client;
  