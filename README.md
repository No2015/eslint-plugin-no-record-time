# eslint-plugin-no-record-time

禁止定时器空运行

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-record-time`:

```
$ npm install eslint-plugin-no-record-time --save-dev
```


## Usage

Add `no-record-time` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-record-time"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-record-time/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





