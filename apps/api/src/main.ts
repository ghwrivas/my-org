/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { ApiResponse, API_URL } from '@my-org/api-interface';

const app = express();

app.get(API_URL, async (req, res) => {
  const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Welcome to api!');
    }, 6000);
  })

  promise1.then((message) => {
    res.send({ message } as ApiResponse);
  })
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
