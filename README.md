# Etherview

A graphical explorer for the Ethereum Blockchain.

## Server

A tiny node.js express server which loads and caches the last x blocks. To avoid calling the [etherscan.io](https://etherscan.io) API to often the server stops pulling blocks when there are no new incoming client requests.

## Frontend

Build with React - bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Styles with scss. Menu UI components created with [https://getmdl.io](https://getmdl.io/).

## Develop

with local server:

```
npm i
API_KEY=XYZ node server/server.js
npm start
```

## Contribute

Ideas, PRs & Feedback welcome!

## Thanks

Thanks to [etherscan.io](https://etherscan.io) for their free API usage and to [zeit](https://zeit.co/now) for their awesome `now` deployments!
