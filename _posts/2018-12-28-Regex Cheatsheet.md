---
layout: post
title: Regex Cheatsheet
categories: javascript
---

- Use <code> + </code> to look for **one or more** characters
- Use <code> * </code> to look for **zero or more** characters.
- You can search the **end of strings** using the <code> $ </code> character at the end of the regex.
```javascript
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

- Start of String or Line: <code> ^ </code> By default, the <code> ^ </code> anchor specifies that the following pattern must begin at the first character position of the string.
- The closest character class in JavaScript to match the **alphabet** is <code>\w</code>.

This shortcut is equal to <code>[A-Za-z0-9_]</code>. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (<code> _ </code>).

```javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

Use the shorthand character class
<code>\w</code> to count the number of **alphanumeric characters** in various quotes and strings.

These shortcut character classes are also known as <code>shorthand character classes</code>.

- You can search for the opposite of the <code>\w</code> (non-alphanumerics) with <code>\W</code>. This shortcut is the same as <code>[^A-Za-z0-9_]</code>.

- The shortcut to look for digit characters is <code>\d</code>. This is equal to the character class <code>[0-9]</code>, which looks for a single character of any number between zero and nine.

- **Non-digit characters** is <code>\D</code>. This is equal to the character class <code>[^0-9]</code>.

- Search for **whitespace** using <code>\s</code>. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class <code>[ \r\t\f\n\v]</code>.

- For **non-whitespace** matching use <code>\S</code>.
You can think of it being similar to the character class <code>[^ \r\t\f\n\v]</code>.

- To specify a certain **range** of patterns, use <code> {} </code>.
```javascript
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\s.*/; // match only 3 to 6 letter h's in the word "Oh no"
let result = ohRegex.test(ohStr);
```

- To only specify the lower number of patterns, keep the first number followed by a comma, like <code>/a{3,}/</code>.
- Use the <code> caret ^ </code character inside a <code> character set </code> to create a <code> negated character set </code> in the form <code> [^thingsThatWillNotBeMatched] </code>.
- Outside of a <code>character set</code>, the <code> ^ </code> is used to search for patterns at the beginning of strings. These are called <code>quantity specifiers</code>. You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter <code>a</code> appearing between <code> 3 </code> and <code> 5 </code> times in the string <code>"ah"</code>, your regex would be <code> /a{3,5}h/ </code>.

Change the regex haRegex to match the word "Hazzah" only when it has four or more letter z's.
```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}.*/; // Change this line
let result = haRegex.test(haStr);
```
- If you want **only a specific number of pattern matches**, just have that one number between the curly brackets.
For example, to match only the word "hah" with the letter <code> a </code> <code> 3 </code> times, your regex would be <code> /ha{3}h/ </code>

- Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.

You can **specify the possible existence of an element** with a <code> ? </code>. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

```javascript
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

- <code>Lookaheads</code> are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string.

There are two kinds of <code>lookaheads: positive</code> lookahead and negative lookahead.

A <code> positive lookahead </code> will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as <code> (?=...) </code> where the <code> ... </code> is the required part that is not matched.

On the other hand, a <code> negative lookahead </code> will look to make sure the element in the search pattern is not there. A negative lookahead is used as <code> (?!...) </code> where the <code> ... </code> is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

Lookaheads are a bit confusing but some examples will help.
```javascript
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex); // Returns ["q"]
noquit.match(qRegex); // Returns ["q"]
```
A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
```javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

- To search for repeat substrings using capture groups <code> ( ) </code> You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash <code> \ <code> and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be <code> \1 </code> to match the first group.

The example below matches any word that occurs twice separated by a space:
```javascript
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```
Using the <code> .match() </code> method on a string will return an array with the string it matches, along with its capture group.

- You can search and replace text in a string using  <code> .replace() </code> on a string. The inputs for <code> .replace() </code> is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs ($).
```javascript
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// Returns "Camp Code"
```

- Typical processing of strings is to remove the whitespace at the start and end of it.

Note
The <code> .trim() </code> method would work here, but you'll need to complete this challenge using regular expressions.


- Replace whitespace:
```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^(\s*)|(\s*$)/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
```
