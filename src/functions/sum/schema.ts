export default {
  type: "object",
  properties: {
    num1: { type: "number" },
    num2: { type: "number" },
  },
  required: ["num1", "num2"],
} as const;
