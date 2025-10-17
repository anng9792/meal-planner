**Milestone 2: Process Blog Entry**
Project 1 – Meal Planner

Team Members: Angelli Nguyen, Aria Brauchli, Autumn Bement

**Thinking in React**

*Step 1: Break the UI into a component hierarchy*
Before starting to code, I planned the layout following the Thinking in React steps.
The structure looks like this:

App: main container that renders everything

Searchbar: lets users type ingredients or use filters

Gallery: displays recipe cards

RecipeCard: shows recipe name, image, and time

RecipeModal: opens when a card is clicked and shows ingredients and steps

This breakdown helped clarify which components depend on each other and how data should flow.

*Step 3: Identify the minimal representation of UI state*
The main states are:

searchInput: what the user types

recipeList: recipes available inside the Gallery

selectedRecipe: which recipe is clicked to open in the modal

Everything else, like the visible recipes, can be derived from those.

*Step 4: Identify where state should live*
The App component holds the top level state and passes it down to children.
RecipeCard doesn’t manage state itself, it just updates which recipe is selected.
RecipeModal takes the selected recipe as props and displays it.

This keeps data flow simple and makes debugging easier.

**Progress and my contributions**

![Meal Planner Wireframe](https://i.imgur.com/7biOk3B.png)


Since Milestone 1, I focused on creating the RecipeCard and RecipeModal components.

RecipeCard is reusable and displays recipe information pulled directly from inside the Gallery component for now. It is still in static form, and we are deciding whether it should link to the recipes or display the recipes and ingredients on each card.

All the recipes have been added at this point.

**Reflections and challenges**

My biggest challenges so far have included linking VS Code and my Github. For some reason, I have bene having trouble with this. I managed to get it figured out today, so it should be smooth sailing. My teammates and I have had a little miscommunication about the information on the cards, so I plan to work this out and get a better understanding of their vision before Thursday.

**Looking ahead**

For the next milestone, my goals are:

* connect the modal to real recipe information through props

* clean up card styling and layout spacing

* help connect the Searchbar input so recipes can be filtered by ingredients

The app is starting to feel cohesive, and I’m confident about the structure we’ve built so far.