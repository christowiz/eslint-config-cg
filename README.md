_Based off of [https://github.com/natterstefan/stylelint-config-ns](https://github.com/natterstefan/stylelint-config-ns)_

# eslint-config-cg

It lints your javascript projects with ease, based on the popular [javascript
code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Features

- based on the the popular [javascript
code style from Airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- easy switchable to their smaller set of rules [eslint-config-airbnb-base](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base)
- with prettier support, thanks to [eslint-plugin-prettier](prettier.io/docs/en/eslint.html#use-eslint-to-run-prettier)
- with [react](https://reactjs.org/), [react-hooks](https://reactjs.org/docs/hooks-intro.html)
  and [jest](https://jestjs.io/) support

## Installation

The default export contains all default Airbnb ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

Install the package with

 ```sh
npm install eslint-config-cg --save-dev

# or
yarn add eslint-config-cg -D
```

Then install the correct versions of each peerDependency package, which are
listed by the command:

```sh
npm info "eslint-config-cg@latest" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev eslint-config-cg

# or
yarn add eslint-config-cg -D --peer
```

## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "eslint-config-cg"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "eslint-config-cg"
}
```

 or `.eslintrc.js`:

```js
module.exports ={
  "extends": "eslint-config-cg"
}
```

## Assumptions

This ESLint configuration comes with some fundamental assumptions:

- react and/or node environment
- jest as the selected test-suite
- browser and/or node environment
- parser: babel (used babel-eslint parser)

Even though I made some assumptions, [you can easily overwrite, extend and unset
rules and any other setting in your custom eslint config](https://eslint.org/docs/user-guide/configuring).

## LICENSE

[MIT](LICENSE)

## Maintainers

<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/christowiz">
          <img width="150" height="150" src="https://github.com/christowiz.png?v=3&s=150">
          <br />
          Christopher Gwizdala
        </a>
      </td>
    </tr>
  <tbody>
</table>