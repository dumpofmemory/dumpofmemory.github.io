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

If we run the <code>ls</code> command to list all the files in the current directory, you will see that we have the *README. txt* file and this *cat. txt* file we just created. 

Now if we move back to *master* using git checkout *master* and do the same command, we can't see any *cat. txt file.* It's not there. 

It does not exist in this timeline. 

Now, if we run <code>$ git log</code>, same thing. No commit. That create quantum cat commit is not there. Just to make sure we're not crazy, if we move back to the cat branch and do the ls command again, the *cat. txt* file is still there. We're not crazy. 

### Time to Merge

So let's assume we're done with that feature branch now, the cat branch. 

We're going to go back to *master*, 
<code>$ git checkout master</code> 

and now it's time to merge those two timelines. 
<code>$ git merge cat</code>. 

Now that we're on *master*, Git will merge the cat branch into it, and it will tell us that it **fast-forwarded**. 

What does that mean? 

So when we create a branch and make one commit or several, and we do nothing on the other branch, it's very easy for Git to merge the *cat* branch back into *master* because nothing was modified on *master* in the meantime. 

### Branch Clean Up

And now that we're done, we can safely delete the cat branch by running 

<code>$ git branch -d cat</code>


### Non-Fast-Forward

<code>$ git checkout -b 'admin'</code> creates and checks out branch

Git can’t fast-forward since changes were made in both branches.

A commit was created to merge the two branches.

<code>$ git log</code>
commit 19f735c3556129279bb10a0d1447dc5aba1e1fa9
Merge: 5c9ed90 7980856
Author: Sam <name@email.com>
Date: Thu Dec 23 17:51:53 2018 -0400
Merge branch 'admin'

## Understanding Pull

<code>$ git pull</code>

1. Fetch (or Sync) our locall repository with the remote one (like <code>$ git fetch</code>)
2. Merges the origin/master with master (<code>$ git merge origin/master</code>)

So, the first thing that pull does is it fetches or syncs our local repository from the remote one. It's the same thing as doing a git fetch command. So in this case, it's going to copy down J's commit into our local repo. 

**However, it's not actually going to update any of our local code.** 

If we looked under the covers here, we would see that in our local repo, we actually have a branch called **origin/master**. That's our remote branch. 

And now the second step with pull is that it merges the **origin/master** with **master**. It's the same thing as running git merge <code>$ git merge origin/master</code>. 

So just like when we try to do a merge for two different branches that have different commits, it's going to pop us straight into an editor where we have to create a merge commit. In this case, our message says that it's merging branch master from our remote repository. Once we save from that editor, it's going to give us some output from the pull command and tell us that it did a recursive merge. I

f we look back at the timeline, we're going to see that we had two branches and they merged on the **merge commit**. 

You might notice here, though, that we have our local master still has that **merge commit**, but the **origin/master** doesn't yet know about our change and about the **merge commit**, and it's not going to know about it until we do <code>$ git push</code>. 

At that point, **origin/master** points to the same **master** branch and everything's been updated. And now if we check the log, we can see there's our **merge commit**. 

Now, some people aren't big fans of **merge commits**. Some people think they pollute our repository, pollute our history, because if you have a lot of collaborators, you might have 10 things that changed and maybe three or four of them are the **merge commits**. It can start to get pretty sloppy. **Git rebase** is one way to get around doing these merge commits. 

But for now, let's move on to another scenario. 
So I and J once again are working on the same code at the same time, except this time they happen to be working on the same file, the same readme. 
I thinks the cake is a lie and Jane thinks the cake is telling the truth. And they both edited that same file. 
J committed her changes and pushed to GitHub, and I just committed locally. 
So now you can see that we still have two different commits, but they're on the same file. 
Hmm, what's going to happen now? So when I does a pull, it does two things. 
Remember, it syncs the repository, pulls down the changes, pulls down J's commit, 
and then it tries to merge, but the merge was not successful. We have a conflict. 
It tells us there's a conflict in readme. So we're going to have to edit that readme. 

Since it spit us back out in the command line, if we do a status, we can see that, well, we have to edit this file and then make a merge commit. 

So if we jump into the readme at this point, we're going to see what kind of looks like a diff. 

Inside this diff, it has our local version. That's the HEAD. And we have J's version. 

We're going to need to edit this file manually to fix it. 

So we're going to delete all the extra text and make it so that the cake is a lie, because that's what we think, well, it is a lie, and then we just call <code>$ git commit -a</code> (Merge Commit). 

We're going to leave off the message because it's going to boot us back into an editor. 

It'll give us a good commit message and it even lists the conflicted files that we fixed. 

Once we save that, our tree, again, looks something like this with our merge commit, and once we push, once again, the **origin/master** syncs up with our local **master**.


## Why Create a Remote Branch?

- When you need other people to work on your branch.

- Any branch that will last more than a day.

### Creating a Remote Branch

<code>$ git checkout -b 'shopping_cart'</code>

<code>$ git push origin 'shopping_cart'</code> Links local branch to
the remote branch (tracking)

### Pushing to the Branch

<code>$ git add cart.rb</code>

<code>$ git commit -a -m "Message"</code>

<code>$ git push</code>

## Pulling New Branches

<code>$ git branch</code> not gonna see it as a local branch yet

<code>$ git branch -r</code> list all remote branches 

<code>$ git checkout 'shopping_cart'</code> to start working on the branch, and it's automatically set up as a tracking remote branch

<code>$ git push</code> push changes to that remote branch

## Remote Show

<code>$ git remote show origin</code> will show all of our remote branches and whether the're tracked or not. It'll show us all the local branches and which remote remote branches the're merged with. And lastly, it'll show us all the local branches configured for when we do a git push.  

The cool part about this is it even goes out to the server and checks to see if any of our local branches are out of date. 

Remote branches, just like local branches, don't last forever. You might get done with a feature. 

To delete the remote branch:
<code>$ git push origin :shopping_cart</code>

This is only going to delete the remote branch though. You're still going to have a local branch for shopping cart. So we're going to also want to delete that.

<code>$ git branch -d shopping_cart</code>

If you try to delete a branch and there's commits that haven't been merged anywhere, well it's going to say "hey you're deleting changes that you might want. " So it gives you a warning. 

But if you really do want to delete the branch you can just do capital D and it will delete it. 

<code>$ git branch -D shopping_cart</code>


So J is the one that deleted the remote commit but I is the one that created it in the first place. So what happens when I tries to push to that remote that doesn't exist anymore. 

Well, nothing happens. Because the remote doesn't exist, locally, it's just a remote branch. 

To figure out what's going on, I might run <code>$ git remote show origin</code>. 

And going to see that "oh look that shopping cart branch is stale, somebody deleted it. " Okay, to remove that reference, he's going to want to run git remote prune origin just as it says and it will clean up all the old stale branches. 

<code>$ git remote prune origin</code> To clean up the references to deleted remote branches

This command is something you probably want to run every once in a while if you're on a large project that has a lot of remote branches that get deleted at some point. It's going to remove all of those stale references. 

## Tagging 

A tag is a reference to a commit (used mostly for release versioning)

<code>$ git tag</code> list all tags

v0.0.1
v0.0.2

<code>$ git checkout v0.0.1</code>


To add new tag <code>$ git tag -a v0.0.3 -m "version 0.0.3"</code>

To push new tags <code>$ git push --tags</code>

## Rebase

<code>$ git rebase</code>

So you remember, we talked about merge commits not being so great. You've got merge commits from local branches, merge commits from remote branches and it might seem like it's polluting your history. That's not so good. 

But there's an alternative to doing these sort of merges with merge commits and that's called **Rebase**.

So, let's show back into this scenario we were at before where we have J's commit up on github which is different than I's commit that's on local. So instead of doing **pull** and **push**, we're going to do **fetch** and then **rebase**. 

So, if you remember, when we do **fetch**, that goes to github and pulls down any changes but doesn't merge them. 

So, if we took a look at our current branch, it looks something like this. We have **master** and **origin/master**. 

Git rebase does three things. 

1. Move all changes to **master** which are not in **origin/master** to a temporary area.

First, it's going to move all changes to master which are not in origin/master, so it's going to take gregg's commit and move that to a temporary area.


2. Run all **origin/master** commits.

Then, it's going to run all of the origin/master commits one at a time. So there it goes. We run that commit on master. 

3. Run all commits in the temporary area, one at a time.

And then third step it's going to run all the commits in the temporary area, on top of our master one at a time. So, just like that. Now, as you can notice, there's no merge commits here. It's just one after the next after the next. 

Back in level three, when we first learned about local branches, remember we had this admin branch and then we had to go back and fix some bugs on master, and then we had to merge the admin into master. Well, how might we rebase instead of doing merge? 

Well, what we might do is first check out the admin branch, 

<code>$ git checkout admin</code>
Switched to branch 'admin'

then run get rebase master, 
<code>$ git rebase master</code>

this is going to first run the **master** commits and then it's going to run our additional **admin** commits. 

Then, the next step is to check out the master branch
<code>$ git checkout master</code>

and then merge from the admin back into master: 
<code>$ git merge admin</code>

All this is going to do is one of those fast-forwards that we talked about. So it's just going to run the same commits one after the next after the next and we're good to go. 


Even if we're running rebase, we still might run into conflicts. So let's take a look at a scenario with a conflict. 

As you can see, you're up on github, we have an extra commit as we do locally and those two extra commits both modify that same readme file. Okay. So step one, we fetch from github, step two, we run git rebase, that's going to take all of our new commits for master, move them into a temporary area, then it's going to run all the origin master commits, and then finally it's going to run all of the commits in the temporary area one at a time, which, of course, is going to lead to a conflict. So here's what you see when rebase runs into a conflict. You can see it's asking us to fix the merge conflict in readme. text, and when we resolve the problem, run git rebase continue. However, if we want to skip the patch, we can run git rebase skip or if we want to roll back and pretend we never rebased, we can just do git rebase abort. If we want to get status, we would see that we're not on any particular branch. We're in the middle of the rebase. So after we edit the readme, we do git add readme, then we type git rebase continue and it continues applying the commits. If we take a look at the commit messages at this point, it would look something like this. So, once again, you can see there is no merge conflict, it's all just one after the next and it feels a bit cleaner. I'm not saying that rebase is the answer all the time. Sometimes you might want to rebase, sometimes you might want to merge. If you're dealing with a branch that's been around for a long time and that has a lot of changes, you probably want to do a merge instead of a rebase. That way you've got, you know, you know exactly when it got merged back in and you have a log of everything that got changed in that one merge when it came over. 


<code>$ git log --oneline --graph</code>

<code>$ git diff HEAD</code> diff between last commit & current state

If you remember those commit SHAs that we saw in the log, you can use those, as well, to compare between two commits specifically by naming the SHAs. Sometimes you'll see these SHA hashes abbreviated on places like GitHub. You can also use these abbreviated SHAs to run diffs and you can also use branches to run diffs. So for instance, you could say git diff master bird if you had a bird branch you wanted to compare against. Finally, just like git log, you can use time-based ranges for git diffs. When projects go on for a while, sometimes you come across a change that has been made in a file that you really can't understand, and a good tool for that is git blame. You can run git blame and file name to see all the changes on each line and who made them when and which commit created that change.

<code>$ git blame index.html --date short</code>

## Untracking Files

what if you’re already tracking log files?

<code>$ git rm --cached development.log</code>

<code>$ git status</code>

Changes to be committed:

deleted: development.log
**Not deleted from the local file system, only from Git**

## Removing Files
<code>$ git rm README.txt</code>

<code>$ git status</code>

**DELETED from the local filesystem & untracked**

<code>$ git commit -m “Remove readme”</code>


