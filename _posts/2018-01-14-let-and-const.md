---
layout: post
title:  "let and const"
categories: javascript
---

With ECMAScript 2015, or ES6, we have two new types of variables you can use in addition to var. They are <code>const</code> and <code>let</code>.

**const is a constant; let is a block scope variable.**

Once const is defined, it cannot be changed. Constants can be useful when performing math equations, of if you have some value you need to stay the same regardless of what else happens in your script.

Let on the other hand is a block scope variable, so a variable with an even smaller scope than a var.

Then I of course need to run the function, logScope. And when I save all this I get the number two right here. Now I'm just going to put in some text here because we're going to make a change to it. So I'll say logScope LocalVar: ", localVar). So we know that this is the local var that's in the scope of logScope. Now I'll create a conditional statement inside of logScope. So I'll say if (localVar), so this will always be true.

Then I set up var localVar. So this is theoretically a new variable, with a name localVar inside the scope of this if statement. I set that to I'm different! Then console log out nested localVar, and localVar. Now based on what we know about var, you'd think that this var localVar would be local only to the if statement, whereas the var localVar for the logScope rule should remain the same.

However, if I save this and look over in my console, you see here we get nested localVar: I'm different! And then logScope localVar: I'm different! Here localVar is assigned a value in the main logScope function. Then reassigned a value in the nested conditional block, and as a result, the value of localVar changes for the entire function scope. That means if you want to modify the value of localVar in nested block without changing it in the whole function, we need to make a whole new variable.

That can be really annoying, it's going to keep making new variables all the time. We solve this using let. So instead of declaring var here at the top I'll declare this as let localVar, and then inside I'll also declare it let localVar. Now I'll just save this and see what happens. And here the nested localVar, so this is the one inside our nested conditional statement, is I'm different! Whereas the logScope localVar, so this one, remains the same.

This will actually work even if we did this. So var localVar, and let localVar. This will even work if we make the first localVar a variable, and the second one a let. Here, when we create either the let or the var localVar at the beginning of the function, its scope is the function itself plus all of its child elements. If you know assign let localVar inside the conditional, the block scope of this new let assignment is only the conditional statement.

So only this block, not the entire function. That means the same let has different values depending on what block scope you're looking at. So the code block is suddenly the deciding factor for what scope the variable has, not just what function it sits inside. This is very handy when you start working with nested functions, loops, and closures, which we'll cover later in the course. So in summary, if you need a constant, use const. If you want to limit the scope of a variable to just one code block, use let.

If you need a general global or local variable, use var. And if you're ever in doubt, experiment and see which one of the three will give you the result you want.
