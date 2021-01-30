# EDIT-THIS-README


1. Home
HTML Setup: form data
On Submit:
    -Store the user data in local storage
    -redirect the user to map/list
2. Map/List
HTML Steup: ul to inject quests into
    -before anything, if all quests are completed, redirect to results page
    -if the user has <= 0 HP, redirect them to the results page
    -otherwise, grab quest data 
    -loop through it
    -generate a title for each quest
    -it the quest has been complete, cross it out
    -if the quest has NOT been completed it should be a link to the correct quest.
3. Results
    -Display some custom ending determined by the user's stats
    -button to play again (clear local storage)