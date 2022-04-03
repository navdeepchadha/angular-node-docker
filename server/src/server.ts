import * as express from 'express';

import * as e from "cors";

const app = express();

import './controllers'; 

import { appRouter } from './decorators/routes.decorator';

app.use(express.static("lotr"))
app.use(e())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// parse requests of content-type - application/json
app.use(express.json())
app.use(appRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
