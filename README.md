


# Randominator

**Randominator** is a *Random (X) Generator* for *Javascript* projects. Generate Random Tokens, Strings, and Integers.

*Open Sourced and Micro Packaged for your convenience!* :sunglasses: :clap: :clap: :clap:

## Get Started

### Installation

First things first, install Randominator using [npm](https://www.npmjs.com/): `npm install randominator`

### Import

Then, import Randominator to your project like so:

```
import randominator from "randominator"
```
or
```
import {generateToken, generateInt} from "randominator"
```

And that's it! You're now ready to use Randominator in your project!


## Usage

### Methods

Right now Randominator has two methods you can use: ***generateToken()*** and ***generateInt()***

#### How to generate a Token

	randominator.generateToken(options)

##### Description

Generates ***(non-cryptographically secure)*** random alphanumeric tokens.

##### Parameters
**options** *(Object)* *(optional)*
 - characterSet *(Array or String)* - Set the combination of characters to be used to generate the token.
	 - Array - Acceptable string values in the array are **"lowercase"**, **"uppercase"**, and **"number"**. Defaults to ***["lowercase", "uppercase", "number"]***
	 
	 - String - The characters used in the String will be used to generate the token. Useful if you want to use Non-Latin Alphabet characters.
	 
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

function Example1 () {
	// Generate 25-character Token using lowercase letters and numbers only.
	generateToken({
		characterSet: ["lowercase", "number"],
		length: 25
	}).then((token)=>{
		// do something with token
		console.log("Token", token);
	});

}

function Example2 () {
	// Generate 5-character Token using supplied japanese characters
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
## Issues

Please report any issues at the [GitHub Repo](https://github.com/joananespina/randominator).

## Support

If you like Randominator and would like to support it, tell your friends and colleagues about it! :grin:

## License

Code released under the [MIT License](https://github.com/joananespina/randominator/blob/master/LICENSE).
