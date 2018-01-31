---
layout: post
title:  "CSS Grid Fundamentals"
categories: CSS
---

<code>box-sizing: border-box;</code>
That will just make sure that any time we add padding or a border to an element, it does not increase the size, so that when we are trying to divvy up the width of a container, then we have it there.
---

The whole idea behind CSS Grid is you take an element, dice it up into columns and rows (these things are collectively referred to as **tracks**). And then, once you have all of your tracks in your element, you can take your items and lay them out anywhere inside of this grid that we want, without any need for positioning (like position absolute/top/etc.)

As soon as you use <code>display: grid;</code> on a container, all its direct children will be automatically considered as CSS Grid items.

Now simply displaying a grid on a container doesn't do much. That's because we yet have to slice and dice our container into something that has a bunch of columns or  rows. The easiest way to achieve that is to explicitly say how big we would like each of those to be. For that use <code>grid-template-columns:</code> and define all of the different columns that you'd want. So, let's say you wanted 3 columns, each of them being 100px:
						<code>grid-template-column: 100px 100px 100px;</code>
And what's gonna happen is that browser is automatically going to take this container and say, well okay it needs to be 300px wide, because they only asked for 3 columns, each of them being 100px wide, and then it will take each of the grid items (each of the immediate children of the grid container) and its just gonna start to lay them out inside of the grid.

<img src="https://78.media.tumblr.com/6ae16fda28681cdc7b56ced3f5fd3ee0/tumblr_p3dko8JSPS1vg9inxo1_1280.png" />

So the rows are automatically created as we go on.

Now, if they're all squished together, we can add something called the <code>grid-gap: 20px</code> and what's that gonna do is it's gonna give you some spacing in between each of your columns and rows.
<![](https://78.media.tumblr.com/c085901c95905e08d9a251ef56a0dc9e/tumblr_p3dko8JSPS1vg9inxo2_1280.png)

You can specify different values for your columns, for example
<code>grid-template-column: 200px 500px 50px;</code>
![](https://78.media.tumblr.com/bd554238742c7692b3b86de5e37d4e64/tumblr_p3dko8JSPS1vg9inxo3_1280.png)

And by default, the items that are inside of that cell are going to just be stretched across.

<code>fr</code> unit will replace the need for percentages.

You can also use the <code>auto</code> keyword and it will take the rest of the available space. (try out)
![](https://78.media.tumblr.com/e51a37d957228f5c7acc988228f63098/tumblr_p3dko8JSPS1vg9inxo6_1280.png)

For example, maybe you wanted a thick sidebar of 300px, and then you just want the rest to be there.
![](https://78.media.tumblr.com/d74bf213553fc085b287e527aa990820/tumblr_p3dko8JSPS1vg9inxo5_1280.png)

Or you can use <code>repeat()</code>. For ex, maybe you wanted 5 columns 100px each, so <code>repeat(5, 100px)</code>. That's going to just dice it up. It's gonna repeat itself five time over for 100px.

Same thing goes for using rows.
![](https://78.media.tumblr.com/4897239b76012a8748b772c5c94bb738/tumblr_p3dko8JSPS1vg9inxo4_1280.png)
In the image above, we have defined 2 columns that go top to bottom, and then we've only defined 3 rows, and you see after that, they sort of just start to size themselves (and that's the implicit grid).
