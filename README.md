# Etherview

A graphical Explorer for the Ethereum Blockchain.

![](https://user-images.githubusercontent.com/1611635/35013888-279cf822-fb0f-11e7-8145-66258e65d31e.png)

**Note: This project is a very simple visualization of the Ethereum Blockchain. It does not include things like uncles and internal contract message calls. Also there is absolutely no guarantee that the data shown here is correct!**

## Server

The project includes a tiny node.js express server which loads and caches the last x blocks. To avoid calling the [etherscan.io](https://etherscan.io) API to often the server stops pulling blocks when there are no new incoming client requests.

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
