# FIT4701-FIT4702_SoftwareEthicsQuiz
Software Ethics Quiz for FIT4701/FIT4702

## Setup to run the server
In the terminal, change directory to ./server and run the following

```
npm install mongodb express cors dotenv
```

In the `.env` file, make sure to change `<password>` in `ATLAS_URI` to the db password.

Then run the following command in the terminal to start the server
```
node server.mjs
```
If the server runs successfully, you should see the following output in the terminal:
```
Server is running on port: 5050
```

To deploy to Github Pages, run:
```
npm run deploy
```
