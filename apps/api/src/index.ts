import { app } from './app';
import { env } from './env';

// Start the server
app.listen(env.PORT, () => {
  console.log(
    'App is running on',
    env.IS_PROD ? `https://${env.API_HOST}` : `http://${env.API_HOST}:${env.PORT}`
  );
});
