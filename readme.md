# Nutella Test

This is a project created to determine the better way to develop nutella!

## Recommendation

Yarn is a dependecies manager, that ensures performance and fiability in packages installation. To install it, just execute:

```node
npm i -g yarn
```

## Install deps and build 

To install deps:

```node
yarn
```

or 

```node
npm i
```

To build and remain watching changes:

```node
yarn build-watch
```

or 

```node
npm build-watch
```

## Project running instructions

After building, just run:

```node
yarn start 
```

or

```node
npm start 
```

## Tests running instructions

To test, just run:

```node
yarn test 
```

or

```node
npm test 
```

## Commit instructions

This project have a syntax checker and a commit message customizer that simplify and orders the way to commit.

To do both things, just execute the next commands and answer the few questions that will appear:

```node
git add .
yarn commit
```
Then, only execute:

```node
git push
```
