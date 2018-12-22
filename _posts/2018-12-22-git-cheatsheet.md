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

## SKIP STAGING AND COMMIT

<code>$ git commit -a -m "Modify readme"</code> Add changes from all tracked files. Doesn’t add new (untracked) files

## UNDOING A COMMIT

Whoops, we forgot something on that commit.

<code>$ git reset --soft HEAD^</code>

**--soft** means Reset into staging

**HEAD^** means Move to commit before "HEAD"

Now I can make changes, and re-commit

## ADDING TO A COMMIT

Maybe we forgot to add a file

<code>$ git add todo.txt</code> Add to the last commit

<code>$ git commit --amend -m "Modify readme & add todo.txt."</code> New commit message

Whatever has been staged is added to last commit

## USEFUL COMMANDS

<code>$ git reset --soft HEAD^</code> Undo last commit, put changes into staging

<code>$ git commit --amend -m "New Message"</code> Change the last commit

<code>$ git reset --hard HEAD^</code> Undo last commit and all changes

<code>$ git reset --hard HEAD^^</code> Undo last 2 commits and all changes

## ADDING A REMOTE

<code>$ git remote add origin https://github.com/Gregg/git-real.git</code>

**add** - new remote

**origin** - our name for this remote 

<code>$ git remote -v</code> show remote repositories

## PUSHING TO REMOTE

<code>$ git push -u origin master</code> 

**origin** - remote repository name 

**master** - local branch to push 

Password caching -> https://help.github.com/articles/set-up-git/#

## PULLING FROM REMOTE

To pull changes down from the remote (its good to do this often) <code>$ git pull</code>

## WORKING WITH REMOTES

To add new remotes <code>$ git remote add 'name' 'address'</code>

To remove remotes <code>$ git remote rm 'name'</code>

To push to remotes <code>$ git push -u 'name' 'branch'</code>

*branch* - usually master

### USEFUL COMMANDS **[Don’t do these after you push]**

<code>$ git reset --soft HEAD^</code>

<code>$ git reset --hard HEAD^</code>

<code>$ git commit --amend -m "New Message"</code>

<code>$ git reset --hard HEAD^^</code>

## CLONNING & BRANCHING

