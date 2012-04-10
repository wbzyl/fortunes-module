# Fortunes module

NodeJS module HOWTO.


## Create the basic structure

Create a directory *fortunes-module* and put in it
the following files:

    .
    |-- README.md
    |-- package.json
    |-- bin
    |   `-- nfortune
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

# Continous integration with Travis

* login into Travis with Github account
* goto the Travis profile page
* add a *.travis.yml* file:

```yaml
language: node_js
node_js:
  - 0.6
```
* add, commit and push changes to GitHub

[![Build Status](https://secure.travis-ci.org/wbzyl/fortunes-module.png)](http://travis-ci.org/wbzyl/fortunes-module)

Travis resources

* [getting started](http://about.travis-ci.org/docs/user/getting-started/)
* [status images](http://about.travis-ci.org/docs/user/status-images/)


# Make the module

Use *npm init* to create the following *package.json* file:


```json
{
  "author": "Włodek Bzyl <matwb@ug.edu.pl>",
  "contributors": [
    { "name": "Włodek Bzyl", "email": "matwb@ug.edu.pl" }
  ],
  "name": "fortunes-module",
  "description": "print a random quote",
  "version": "0.0.1",
  "keywords": ["fortune", "template", "module"],
  "repository": {
    "type": "git",
    "url": "git://github.com/wbzyl/fortunes-module.git"
  },
  "main": "lib/main.js",
  "bin": {
    "nfortune": "./bin/nfortune"
  },
  "scripts": {
    "test": "mocha test/*.js"
  },
  "dependencies": {},
  "devDependencies": {
    "mocha": "*",
    "should": "*"
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
