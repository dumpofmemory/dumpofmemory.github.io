---
layout: post
title: Troubleshooting npx create-react-app --template typescript  installation
categories: ReactJS
---

> Error message I received when starting another create-react-app project:
> A template was not provided. This is likely because you're using an outdated version of create-react-app.
> Please note that global installs of create-react-app are no longer supported.

That's how I discovered couple of useful commands for the future instances.
<code>which create-react-app</code>
<code>npm uninstall -g create-react-app</code>
<code>yarn global remove create-react-app</code>
<code>npm cache clean --force</code>
<code>npm cache verify</code>

```
➜  zeapp which create-react-app                      

/usr/local/bin/create-react-app

➜  zeapp npm uninstall -g create-react-app

up to date in 0.036s

➜  zeapp which create-react-app           

/usr/local/bin/create-react-app

➜  zeapp yarn global remove create-react-app

yarn global v1.15.2

[1/2] 🗑  Removing module create-react-app...

[2/2] 🔨  Regenerating lockfile and installing missing dependencies...

success Uninstalled packages.

✨  Done in 0.80s.

➜  zeapp which create-react-app             

create-react-app not found

➜  zeapp node --version                   

v11.10.1

➜  zeapp 

➜  zeapp npm cache clean --force

npm WARN using --force I sure hope you know what you are doing.

➜  zeapp npm cache verify

Cache verified and compressed (~/.npm/_cacache):

Content verified: 0 (0 bytes)

Index entries: 0

Finished in 0.019s

```
Then I  dedcided to remove zeapp, then cd ../ back to Desktop and tried again from the scratch.
<code>npx create-react-app my-app --template typescript</code>

This time the project was successfully created.

That's all folks!