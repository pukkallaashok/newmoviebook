import OpenAI from "openai";
import { openAI_Key } from "./constants";

const openai = new OpenAI({
  apiKey: openAI_Key,
  dangerouslyAllowBrowser: true, // defaults to process.env["OPENAI_API_KEY"]
});

export default openai;
