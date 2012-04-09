# Fortunes module

NodeJS module HOWTO.


## Continous instegration with Travis

* login into Travis with Github account
* goto the Travis profile page
* add a *.travis.yml* file:

```yaml
language: node_js
node_js:
  - 0.6
```

[![Build Status](https://secure.travis-ci.org/wbzyl/fortunes-module.png)](http://travis-ci.org/wbzyl/fortunes-module)

Travis resources

* [getting started](http://about.travis-ci.org/docs/user/getting-started/)
* [status images](http://about.travis-ci.org/docs/user/status-images/)


## Create the basic structure

Create a directory *fortunes-module* and put in it
the following files:

    .
    |-- README.md
    |-- package.json
    |-- lib
    |   `-- main.js
    `-- test
        `-- main.js


## GitHub


Setup a local git repository:

```shell-unix-generic
git init
git add .
git commit -m "create the basic structure"
```

Install the *github* gem:

```shell-unix-generic
gem install github
```

Create the remote repo at GitHub:

```shell-unix-generic
github create-from-local
```

## Make the module

Use *npm init* to create the following *package.json* file:


```json
{
  "author": "Włodek Bzyl",
  "name": "fortunes-module",
  "description": "print a random quote",
  "version": "0.0.1",
  "repository": {
    "type": "git",
    "url": "git://github.com/wbzyl/fortunes-module.git"
  },
  "main": "lib/main.js",
  "scripts": {
    "test": "mocha test/*.js"
  },
  "dependencies": {},
  "devDependencies": {
    "mocha": "",
    "should": ""
  },
  "optionalDependencies": {},
  "engines": {
    "node": "*"
  }
}
```

Install the *devDependencies*:

```shell-unix-generic
npm install
```

and ignore them:

```shell-unix-generic
echo node_modules/ > .gitignore
git add package.json .gitignore
git commit -m 'ignore installed dependencies'
```


## Make the first test

* [should.js](https://github.com/visionmedia/should.js)
* [mocha](http://visionmedia.github.com/mocha/)
