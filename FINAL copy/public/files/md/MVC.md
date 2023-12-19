#### MVC and Vue

#### Model
- Data represented in a dedicated data structure
  - (Ex.) Databses, objects (E.g., JSON), Tables (e.g., CSV)

#### View

Vue Templating Language
- Similar to HTML
- Can allow for dynamic/conditional display of content on a webpage
- Can insert live JS into your code

Ex: `<div v-for ="text in text-convo">`
In this case, text in text-convo is js

Making a twitter-like feed (Pseudo-code)

Template
- Array of objects called "home-feed" with tweets for your home feed
- Div for = "tweets in home-feed"
  - Content = tweet
/ Template

#### Controller

MVC On Real Websites: Thin Client
- Server provides model view and controler, and client just renders the html file

MVC On Real Websites: Thick CLient
- Client provides model view and controller