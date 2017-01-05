# ng2-form-helpers
Angular 2 Validators for reactive forms 

##Purpose
Repo contains directives, pipes and validators (reactive form) for making form fields more convenient for use.
The idea of these components is to be able to format input fields of the form while not changing the format of 
the model, ngModel for instance, 

## phoneFormatter
for example the first formatter I've created is for US based phone numbers

`<input ngModel='phone' name='phone' phoneFormatter />`

In short the input value field for phoneFormatter will be:
`(800) 654 8796`
However the ngModel value will be:
`8006548796`
This ensures that the formatting exists only in the view.

[example]: https://github.com/inigay/ng2-ini-validator/public/phone-formatter-example.png


### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed version 5+
- Make sure you have NPM installed version 3+
- `WINDOWS ONLY` run `npm install -g webpack webpack-dev-server typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)
- if you want to use other port, open `package.json` file, then change port in `--port 3000` script
