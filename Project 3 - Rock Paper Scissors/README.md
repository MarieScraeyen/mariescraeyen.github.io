Introduction
We’re going to make a simple implementation of grade-school classic “rock paper scissors”. If you don’t know what that is check the Wikipedia article or this detailed step-by-step. For the moment we’re just going to play the game from the browser console, but we will revisit this project in a later lesson and add a Graphical User Interface with buttons and text, so don’t forget to keep the code on GitHub! You might notice some ‘Live Preview’ links in the student solutions that have a GUI - this is coming in a later lesson. When you get there don’t forget to come back and add your link!

Quick Exercises Before Starting
Identify three ways to include JavaScript in a page.
Test it out! Write console.log("Hello World"); in JavaScript and check to see if it displays in the browser’s console.
Finally, this is your first JavaScript program built from scratch, so don’t forget the previous lesson on problem solving. Plan your solution out before writing any code, and test each piece as you build to ensure it is working before moving on to the next!

Assignment
Don’t forget to commit early & often! You can reference the Commit Message lesson here!

Start a new Git repo for your project.
Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.

<!--  -->
<!--  -->

Introduction
Now that we can manipulate the DOM, it’s time to revisit Rock Paper Scissors and add a simple UI to it.

Before you start making changes to your Rock Paper Scissors project, you need to learn about a concept in Git called branching so that you can make your changes without having to worry about breaking what you have now.

Branches in Git allow your repository to hold multiple alternate reality versions of your files at the same time. You’ve actually (sort of) been using branches since you made your first commit, you just might not have known it! Back in the setting up Git lesson when you ran git config --global init.defaultBranch main you were setting the name of what’s called the default branch for your repos. The default branch is just what we call the branch that is created when you make your first commit on a project, and in that command we set the name to be main as is the current standard.

Like the branches in a tree (hence the name), all of the branches for a project stem off of a “trunk” (the main branch) or off of other branches.

When you make commits on a specific branch those changes only exist on that branch, leaving all of your other branches exactly as they were when you branched off of them.

This means that you can keep your main branch as a place for only finished features that you know are working properly, and add each feature to your project using dedicated branches which we call feature branches.

Using Branches
You can make new branches by using the command git branch <branch_name>. You can then change to your new branch using git checkout <branch_name>. You can also create a new branch and change to it in a single command by using the -b flag with checkout, in the form git checkout -b <branch_name>.

You can see all of your current branches using git branch with no other arguments. The branch that you’re currently on will be indicated with an asterisk. If you want to change back to main from any other branch, you can do so just like changing to any other branch using git checkout main.

Once you’re done working on your feature branch and you’re ready to bring the commits that you’ve made on it to your main branch, you need to perform what is known as a merge.

Merges are done by using the command git merge <branch_name> which will take the changes you’ve committed in branch_name and add them to the branch that you’re currently on.

Sometimes the same lines in a file will have been changed by two different branches. When this happens you will have a merge conflict when you try and merge those branches together. In order to finish merging the branches you will have to first resolve the conflict, which will be covered in a future lesson.

When you don’t need a branch anymore it can be deleted using git branch -d <branch_name> if the branch has already been merged into main, or with git branch -D <branch_name> if it hasn’t. You will usually want to delete branches when you’re done with them, otherwise they can pile up and make it more difficult to find the branch you’re looking for when you need it.

Sharing Code
Another great use case for branches is to share code with others that you might not want to commit to your main branch (or feature branch) at all.

For example: if you have a bug in a new feature you’re working on that you can’t figure out, and it causes your code to break, you don’t want to commit that broken code and have it in your project’s “permanent record”. You could instead create a new temporary branch, switch to it and commit your code to this new branch. If you then push this new temporary branch to GitHub you can share it with others that may be able to help solve your problem. In the assignment below you will get some hands-on practice on making new branches.

Assignment
Set up a new branch on your previous Rock Paper Scissors repo
Since we’ll be making a UI for our Rock Paper Scissors game, make a new branch and change to it with the command git checkout -b rps-ui.
You are now working in the rps-ui branch, locally. However, this branch does not exist in your remote repo yet. If you go to your github repo page, you’ll see that you only have 1 branch, which would be main. Let’s push this new branch to your remote repo with the command git push origin rps-ui. Now, you’ll see two branches in your GitHub repository! You can select the new branch on GitHub using the dropdown branch selector shown in the screenshot below.

Dropdown menu of branches on GitHub

Make sure you are on the rps-ui branch. You can check this, with the git branch command. The branch you are currently on will have an (*)asterisk next to it. If you’re in another branch for some reason, change to rps-ui with the command git checkout rps-ui. Now you’re all set to work on your new feature! Note: You can add files, commit to this branch, and push changes to your repo, just like you would with the main branch. Everything is the same except when you push the changes, you’d use git push origin rps-ui instead of git push origin main, since we’re pushing to our new branch.
In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
For now, remove the logic that plays exactly five rounds.
Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
Add a div for displaying results and change all of your console.logs into DOM methods.
Display the running score, and announce a winner of the game once one player reaches 5 points.
You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.
Once you’re all done with your UI and made sure everything’s satisfactory, commit your changes to the rps-ui branch.
Now let’s take a look at how we can merge the changes from our rps-ui branch back to our main branch.
Checkout the branch we want to merge INTO i.e. main with the command git checkout main.
Now let’s merge our rps-ui branch into main, our current branch, with git merge rps-ui.
If everything goes fine, our rps-ui branch is now successfully merged with main! Use git log and you’ll see all the commits you’ve made to your feature branch on top of the commits you made to the main branch. Now for our final step!
Let’s push our main branch into our remote repo by running git push origin main . Go to your GitHub repo and you’ll see that our main branch will have all the changes and commits you made to the rps-ui branch. Congratulations! You’ve successfully pushed your first feature into your production branch!
Now that we have all our code in the main branch, we don’t really need our rps-ui branch anymore. Let’s do some cleanup, both locally and in the remote repo. Delete the branch from our local repo with git branch -d rps-ui and also delete it from the remote repo on GitHub with git push --delete origin rps-ui. Congrats, we’re all done with our cleanup!
Make sure to publish the project on GitHub Pages and add a live preview link in the project lesson.
Additional Resources
This section contains helpful links to related content. It isn’t required, so consider it supplemental.

Actively learn the Git workflows discussed in this lesson with this interactive Visual Git Cheatsheet by Andrew Peterson. It’s okay to be unfamiliar with the variety of commands you’ll interact with. You’ll learn about the ones you’re unfamiliar with later in the curriculum.
Make pushing your local commits to remote branches easier with the command git push -u origin <branch>. It automatically links the local branch you push with the remote one. Read this educative.io article by Talha Ashar and commit faster to a remote branch with a simple git push command.
Learn Git Branching by going through this interactive visualizer by Peter Cottle. You can learn the substantial commands about branching while seeing how the commands you write affect your visually presented branch tree.