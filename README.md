# MyReads Project

This project for the Udacity React Fundamentals course is a book tracking application that allow a user to select books and categorize them into three categories; Currently Reading, Want to Read and Read.  The initial root page shows the books that are currently on one of the three shelves.  The dropdown menu allows a user to select the category for that book.  On the bottom right is a green search button that will allow a uer to search for a book by typing in text.  Once the book is found, the user can then select a shelf to put it on.  Clicking the back arrow next to the search bar allows the user to go back to the shelf page, where the user will see the book they just selected. 

## Instructions for running

Clone this repository, load it into you favorite IDE and in a terminal window type in "npm install" and then "npm start".  This should place you into a browser with the shelf page loaded.

## How I started

This code started as a download of the starter repository from Udacity

## Components

The following components were created for this project:

BookShelfPage: this is the root page and holds three "Bookshelf" components for each category
Bookshelf: this component holds all of the books for it's category
Book: this component represents a single book
BookshelfChanger: this is the dropdown menu shown for each book
SearchBooks: this is the search page that holds all of the books found during a search

## Rubric completion
- Is the application easy to install and start? 
  -  npm start, pretty easy!
- Does the application include a README with clear installation and launch instructions? 
  - you may or may not be reading it right now
- Does the main page show three categories (or “bookshelves”) for books (i.e., Currently Reading, Want to Read, and Read)?
  - yes
- Does the main page allow users to move books between shelves?
  - yes
- Does information persist between page refreshes?
Does the search page have a search input that allows users to search for books?
  - yes
- Do the search results allow a user to categorize a book as “Currently Reading,” “Want to Read”, or “Read”?
  - yes
- Do selections made on the search page show up on the main page?
  - yes
- Does the main page link to the search page?
  - yes
- Does the search page link back to the main page?
  - yes
- Does the project code handle state management appropriately?
  - yes
- Are components built as functional components?
  - yes
- Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation (e.g., a key for list items)? Is the code formatted properly?
  - yes


## Code Review fixes (iteration #1)
Issue 1 : Authors were not showing on the main page:
    Problem: Misspelled the property name from author to authors
    Fix: spell it correctly

Issue 2 : If a book is assigned to a shelf on the main page and that book appears on the search page, the correct shelf is NOT selected on the search page
    Problem: Misunderstanding of the BookAPI.  Assumed that when the BookAPI.update method was called it would update the repository so that the search endpoint would return the shelf property of the book object.
    Fix: pass the books object so that the shelf property of the book object could be added to the books in the search response object

Issue 3 : The prior search results are shown. Books are shown when all text is deleted from the search input box
    Problem: When checking for a search value, we are not handling when there is no value in the text search.
    Fix: Check the search value.  If there is an empty string, set the search result to an empty array

Issue 4 : The main and search page books don't have the same book shelf state. Please see the comment above and in the code review.
    I think the above fix is from Issue three covers this.

## Code Review fixes (iteration #2)
Issue 1 : When the search page call to the API returns no results, the page is showing an error.
    Problem : "map" does not work on an empty array
    Fix : check the result from the api call for values before map is call.  Set the book list to empty for no books returned.