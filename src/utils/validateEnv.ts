// Function to check for any undefined
// environment variables during server start up
const validateEnv = (envArr: string[]) => {
  for (let envVar of envArr) {
    const value = process.env?.[envVar];
    if (!value || value.trim() === '') {
      throw new Error(
        `Fatal error: Missing required environment variable: ${envVar}`,
      );
    }
  }
};

export default validateEnv;
