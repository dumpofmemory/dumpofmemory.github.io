---
layout: post
title: "Git Cheatsheet (source: codeschool.com)"
categories: javascript
---

# Terminal Commands

- **touch** 'filename' - creates a new file
- **mv** 'oldfilename' 'newfilename' - renames file
- **mkdir** - creates a directory
- **rm** - removes

# Git

<code>$ git config --global user.name "Gregg Pollack"</code>

<code>$ git config --global user.email gregg@codeschool.com</code>

<code>$ git config --global color.ui true</code>

<code>$ git init</code> Initialized empty Git repository in /Users/sam/store/.git/

<code>$ git add --all</code>

<code>$ git rm --cached 'filename'</code>

<code>$ git status</code>

<code>$ git commit -m "Create a README."</code>

<code>$ git log</code>

<code>$ git checkout -- 'filename'</code> to discard changes in working directory

<code>$ git diff</code> show unstaged differences since last commit

<code>$ git diff --staged</code>

<code>$ git reset HEAD LICENSE</code> refers to last commit and will unstage it

<code>$ git checkout -- LICENSE</code> blow away all changes since last commit

## Skip Staging and Commit

<code>$ git commit -a -m "Modify readme"</code> Add changes from all tracked files. Doesn’t add new (untracked) files

## Undoing a Commit

Whoops, we forgot something on that commit.

<code>$ git reset --soft HEAD^</code>

**--soft** means Reset into staging

**HEAD^** means Move to commit before "HEAD"

Now I can make changes, and re-commit

## Adding to a Commit

Maybe we forgot to add a file

<code>$ git add todo.txt</code> Add to the last commit

<code>$ git commit --amend -m "Modify readme & add todo.txt."</code> New commit message

Whatever has been staged is added to last commit

## Useful Commands

<code>$ git reset --soft HEAD^</code> Undo last commit, put changes into staging

<code>$ git commit --amend -m "New Message"</code> Change the last commit

<code>$ git reset --hard HEAD^</code> Undo last commit and all changes

<code>$ git reset --hard HEAD^^</code> Undo last 2 commits and all changes

## Adding a Remote 

<code>$ git remote add origin https://github.com/Gregg/git-real.git</code>

**add** - new remote

**origin** - our name for this remote 

<code>$ git remote -v</code> show remote repositories

## Pushing to a Remote 

<code>$ git push -u origin *master*</code> 

**origin** - remote repository name 

***master*** - local branch to push 

Password caching -> https://help.github.com/articles/set-up-git/#

## Pulling From a Remote

To pull changes down from the remote (its good to do this often) <code>$ git pull</code>

## Working with Remotes

To add new remotes <code>$ git remote add 'name' 'address'</code>

To remove remotes <code>$ git remote rm 'name'</code>

To push to remotes <code>$ git push -u 'name' 'branch'</code>

**branch** - usually *master*

### Useful Commands **[Don’t do these after you push]**

<code>$ git reset --soft HEAD^</code>

<code>$ git reset --hard HEAD^</code>

<code>$ git commit --amend -m "New Message"</code>

<code>$ git reset --hard HEAD^^</code>

## Cloning and Branching

To clone a repository <code>$ git clone https://url.com/repo/project.git</code>

It will create a local directory with that repository. It will be called the name that the repository was called. If you want to change that name to something else, you can say the same as above and pass in the desirable name:

<code>$ git clone https://url.com/repo/project.git **'myproject'**</code>

### Git Clone

1. The first thing git clone does is download the repository.

2. Adds the ‘origin’ remote, pointing it to the clone URL.

The second thing is does is create a remote called *origin* and point it to the URL we passed it to.

We can check that by simply running <code>$ git remote -v</code> and it would list all the remotes, so you will see origin and then the URL that we passed it to.

<code>$ git remote -v</code>
<code>
origin https://github.com/codeschool/git-real.git (fetch)
origin https://github.com/codeschool/git-real.git (push)
<code>

3. And finally it will check out the initial branch, likely *master*, and set the branch right there and set the HEAD.  

### Branching Out

Need to work on a feature that will take some time?
Time to branch out.

branch created from *master*:
<code>$ git branch cat</code>

But if we check with <code>$ git branch</code>, we can see we're still on the *master* branch (HEAD still on *master*). 

<code>
cat
* *master*
</code>

### Switching to a Branch

To move to the cat branch, we're going to need to <code>$ git checkout cat</code>

When we're doing that, what we're actually doing is switching timelines. 

We're not in the **master** timeline anymore. We're in a different timeline. 

We can do whatever we want and then move back onto *master* whenever we need to. 

We're going to run this command right here, and what it does is create a cat. txt file and inside of it put the word Schrödinger: 
<code>$ echo "Schrödinger" > cat.txt</code>

Then we're going to add it to the stage,
<code>$ git add cat.txt</code>

commit it, 
<code>$ git commit -m "Create quantum cat."</code> 

and this commit will be added to our cat timeline, not to our *master* branch, but to our cat branch. 

### Working on a Branch

If we run the <code> ls</code> command to list all the files in the current directory, you will see that we have the *README. txt* file and this *cat. txt* file we just created. 

Now if we move back to *master* using git checkout *master* and do the same command, we can't see any *cat. txt file.* It's not there. 

It does not exist in this timeline. 

Now, if we run <code>$ git log</code>, same thing. No commit. That create quantum cat commit is not there. Just to make sure we're not crazy, if we move back to the cat branch and do the ls command again, the *cat. txt* file is still there. We're not crazy. 

So let's assume we're done with that feature branch now, the cat branch. 

We're going to go back to *master*, 
<code>$ git checkout *master*</code> 

and now it's time to merge those two timelines. 
<code>$ git merge cat</code>. 

Now that we're on *master*, Git will merge the cat branch into it, and it will tell us that it **fast-forwarded**. 

What does that mean? 

So when we create a branch and make one commit or several, and we do nothing on the other branch, it's very easy for Git to merge the *cat* branch back into *master* because nothing was modified on *master* in the meantime. 

And now that we're done, we can safely delete the cat branch by running 

<code>$ git branch -d cat</code>






