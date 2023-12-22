import { MessageType } from "../screens/HomeScreen";

export const dummyMessages: MessageType[] = [
  {
    role: "user",
    content: "How are you",
  },
  {
    role: "assistant",
    content: "I'm fine. How may I help you today?",
  },
  {
    role: "user",
    content: "create an image of a dog playing a guitar",
  },
  {
    role: "assistant",
    content:
      "https://img.freepik.com/premium-photo/dog-playing-electric-guitar-with-blue-background_874813-5689.jpg?w=1380",
  },
];
