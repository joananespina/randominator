
# Randominator

##### *WARNING!* This project is still in early development stages. Use at your own RISK!

**Randominator** is an Open Sourced Random (X) Generator written in *Javascript*. Generate Random Tokens, Strings, and Numbers.


## Installation

Right now you can only install Randominator using [npm](https://www.npmjs.com/): `npm install randominator`

## Usage

First import randominator to your project like so:

```
import Randominator from "randominator"
```
or
```
import {generateToken, generateInt} from "randominator"
```

and then use it in your code . . .

### Generate Tokens

**Randominator.generateToken(options)** - generates random alphanumeric tokens.

##### Parameters
**options** *(Object)* *(optional)*
 - characterSet *(Array)* - Set the characters used to generate the token. Acceptable string values in the array are **"lowercase"**, **"uppercase"**, and **"number"**. Defaults to ***["lowercase", "uppercase", "number"]***
 - length *(Integer)* - Set the length of the token. Defaults to **8**

*Important: Test the length to your use case before using in production. Generating large data sets with the length set to a high value might cause performance issues.*

##### Returns
Returns a Promise. Results to a string value if the promise resolves.

##### Basic Example

*Generate a default Token (8-characters long, alphanumeric Token)*
```
import {generateToken} from "randominator"

function Example () {

	generateToken().then((token)=>{
		// do something with token
		console.log("Token", token);
	});

}

```

*Generate a 25-characters long Token with only lowercase letters and numbers*
```
import {generateToken} from "randominator"

function Example () {

	generateToken({
		characterSet: ["lowercase", "number"]
		length: 25
	}).then((token)=>{
		// do something with token
		console.log("Token", token);
	});

}

```

### Generate Integer

**Randominator.generateInt(min, max)** - generates random integers within a *minimum* to *maximum* range.

##### Parameters
**min** *(Integer)* *(required)*
 - Must be less than  **max** parameter
 - Must be valid integer value
 - The minimum integer to generate

**max** *(Integer)* *(required)*
 - Must be greater than  **min** parameter
 - Must be valid integer value
 - The maximum integer to generate

##### Returns
Returns a Promise. Results to an integer value if the promise resolves.

##### Basic Example
*Generate an Integer value from 10 to 1000*
```
import {generateInt} from "randominator"

function Example () {

	generateInt(10, 1000).then((value)=>{
		// do something with value
		console.log("Integer", value);
	}).catch((error)=>{
		// there's an error?
		console.log("Error", error);
	});

}
```

## License

Code released under the [MIT License](https://github.com/joananespina/randominator/blob/master/LICENSE).
