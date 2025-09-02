import { GoogleGenAI } from "@google/genai";
import { gemini_api } from "./constants";

export const ai = new GoogleGenAI({ apiKey: gemini_api });

