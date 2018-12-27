# Regular Expression

This project is a list of regular expressions which I have required to test for other applications

I will try and list them all in the read me, otherwise take a look in all test files to see the regular expressions which have been tested.

## String contains word

```javascript
const reg = /david/
const text = "my name is david thorn"
const result: RegExpMatchArray | null = text.match(reg)
expect(result).to.not.be.null
const resultAsArray = [ 
    'david', 
    index: 11, 
    input: 'my name is david thorn'
]
```

## Capturing the name which has been found

This time we will capture the name which we have searched for by wrapping the name `david` in brackets.

```javascript
const reg = /(david)/
const text = "my name is david thorn"
const result: RegExpMatchArray | null = text.match(reg)
expect(result).to.not.be.null
const resultAsArray = [ 
    'david', 
    'david',  // captured item
    index: 11, 
    input: 'my name is david thorn' 
]
```

## Lets do some more difficult stuff

Lets match that a sentence contains the `swift` keyword `func` and has a `method name` which directly follows it

```javascript
@test "that the method name is preceeded by a func keyword " () {
    const reg = /func(?=\s+([\w\d]+))/
    const text = "func myMethod"
    const result = text.match(reg)
    expect(result).to.not.be.null
    if(result !== null)
    expect(result[1]).to.equal('myMethod')
}
```

> RegExpMatchArray Contents

```javascript
[ 
    'func', 
    'myMethod', 
    index: 0, 
    input: 
    'func myMethod' 
]
```

## Now test that the method is followed by open and close brackets

> Quick Explanation of it all

```javascript
const a = /func/
const b = /func(?=\s+)/ // func followed by at least one space
const c = /func(?=\s+([\w\d]+))/ // one space followed by at least one word character or digit and capturing the method name ([\w]+)

/// method name is followed by at least one space and open and close brackets
/// which do not contain any characters
const d = /func(?=\s+([\w\d]+)(?=\s*\(\)))/
```

> Now time to run the code

```javascript
const reg = /func(?=\s+([\w\d]+)(?=\s*\(\)))/
const text = "func myMethod()"
const result = text.match(reg)
expect(result).to.not.be.null
if(result !== null)
expect(result[1]).to.equal('myMethod')
```

> RegExpMatchArray Contents

```javascript
[ 
    'func', 
    'myMethod', 
    index: 0, 
    input: 
    'func myMethod()'
]
```
