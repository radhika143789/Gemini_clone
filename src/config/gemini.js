/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

// Import the GoogleGenerativeAI class and other required constants
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';

// Set your API key
const apiKey = "AIzaSyDvJRMYfKlLpyZv_k3FQtSVZJpXSVwKonA";

// Create a new instance of the GoogleGenerativeAI class
const genAI = new GoogleGenerativeAI(apiKey);

// Get a generative model
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Define the generation configuration
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Define the run function
async function run(prompt) {
  // Start a new chat session
  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [],
  });

  // Send a message to the chat session
  const result = await chatSession.sendMessage(prompt);
  const response= result.response;
  // Log the response text
  console.log(response.text());
  return response.text()
}

// Export the run function
export default run;
