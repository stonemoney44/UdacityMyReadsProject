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