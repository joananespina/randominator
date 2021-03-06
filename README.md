# Randominator

**Randominator** is a *Random (X) Generator* for *Javascript* projects. Generate Random Tokens, Strings, and Integers.

*Open Sourced and Micro Packaged for your convenience!* :sunglasses: :clap: :clap: :clap:

## Quick Start

### Installation

Install Randominator using [npm](https://www.npmjs.com/package/randominator): `npm install randominator`

### Basic Usage

```
import randominator from "randominator";

randominator.generateToken().then((token)=>{
	// do something with token
	console.log(token);
});
```

## Methods

Right now Randominator has two methods you can use: ***generateToken()*** and ***generateInt()***

#### How to generate a Token

	randominator.generateToken(options)

##### Description

Generates ***(non-cryptographically secure)*** random alphanumeric tokens.

##### Parameters
**options** *(Object)* *(optional)*
 - characterSet *(Array or String)* - Set the combination of characters to be used to generate the token. Defaults to ***["lowercase", "uppercase", "number"]***
 
	 - Array - Array of string values, acceptable string values in the array are "lowercase", "uppercase", and "number".
	 
	 - String - The characters used in the String will be used to generate the token. Useful if you want to use Non-Latin Alphabet characters.
	 
 - length *(Integer)* - Set the length of the token. Defaults to **8**

*Important: Test the length to your use case before using in production. Generating large data sets with the length set to a high value might cause performance issues.*

##### Returns
Returns a Promise. Results to a string value if the promise resolves.

##### Basic Example


```
import {generateToken} from "randominator"

function Example1 () {
	// Generate a default settings Token (8-characters long and Alphanumeric)
	generateToken().then((token)=>{
		// do something with token
		console.log("Token", token);
	});

}

function Example2 () {
	// Generate 25-characters long Token using lowercase letters and numbers only.
	generateToken({
		characterSet: ["lowercase", "number"],
		length: 25
	}).then((token)=>{
		// do something with token
		console.log("Token", token);
	});

}

function Example3 () {
	// Generate 5-characters long Token using supplied japanese characters
	generateToken({
		characterSet: "ランダム",
		length: 5
	}).then((token)=>{
		// do something with token
		console.log("Token", token);
	});
	
}

```

#### How to generate an Integer

	randominator.generateInt(min, max)

##### Description

Generates ***(non-cryptographically secure)*** random integers within a *minimum* to *maximum* range.

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

```
import {generateInt} from "randominator"

function Example () {
	
	// Generate a random Integer value from 10 to 1000

	generateInt(10, 1000).then((value)=>{
		// do something with value
		console.log("Integer", value);
	}).catch((error)=>{
		// there's an error?
		console.log("Error", error);
	});

}
```
## Issues

Please report any issues [here](https://github.com/joananespina/randominator/issues).

## Support

If you like Randominator and would like to support it, tell your friends and colleagues about it! :grin:

## License

Code released under the [MIT License](https://github.com/joananespina/randominator/blob/master/LICENSE).
