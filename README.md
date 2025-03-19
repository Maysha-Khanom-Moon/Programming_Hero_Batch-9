# Programming Hero Batch 9

## Assignment's Live Link:
- [A1 - New Year New Mission](https://maysha-khanom-moon.github.io/ph-a1-new-year-new-mission/)

- [A2 - Trek Twig](https://maysha-khanom-moon.github.io/ph__a2__trek-twig/)

<br>
<br>

## Useful Links
- [Free images and resources collection for website](https://medium.com/design-bootcamp/free-images-and-resources-collection-for-website-c77f2fc46ce5)

<br>

## Interview Questions:
1. what do you understand by the universal selector?
- It selects all elements on a webpage.

<br>

2. differentiate between the use of id selector and class selector?
- ID (#id): Unique, applies to one element.
- Class (.class): Reusable, applies to multiple elements.

<br>

3. how can you use css to control image repetition?
- Use background-repeat (e.g., no-repeat, repeat-x, repeat-y).

<br>

4. are the html tags and elements the same thing?
- Tags: Markup symbols (```<p> </p>```)
- Elements: Includes tags and content (```<p>Hello</p>```)

<br>

5. difference between inline, block, and inline-block elements. is it possible to change an inline element into a block-level element?
- Inline: No new line, width as content (```<span>```). And height doesn't work here.
```
<a> <b> <strong> <i> <em> <u> <span> <img> <br> 
<input> <label> <mark> 
<small> <sub> <sup> 
<code> <time>
```

- Block: Full width, starts on a new line (```<div>```).
```
    <div>
    <p> 
    <heading_tags> 
    <list_tags>
    <table_tags> 
    <form> 
    <section> <article> 
    <header> <footer>
```
- Inline-Block: Behaves like inline but allows setting width/height.
- Changing Inline to Block: Use ```display: block;``` in CSS.

<br>
<br>

6. What is Git? What are the advantages of using Git?
- <b>Git</b> is a distributed version control system that tracks changes in source code.
- Advantages:
    - Distributed system (works offline).
    - Branching and merging support.
    - Fast and efficient.
    - Secure and reliable.

<br>

7. What do you understand by the term ‘Version Control System’?
- A Version Control System (VCS) is a tool that tracks changes in files, allowing collaboration, history tracking, and rollback to previous versions.

<br>

8. What’s the difference between Git and GitHub?
- <b>Git</b> is a version control system that manages code changes locally.
- <b>GitHub</b> is a cloud-based hosting service for Git repositories, enabling collaboration and remote access.

9. Name a few Git commands with their function
- git init → Initialize a new repository.
- git clone ```<repo>``` → Clone a repository.
- git add ```<file>``` → Stage changes.
- git commit -m "message" → Save changes.
- git push → Upload changes to a remote repo.
- git pull → Fetch and merge changes from remote.

10. Difference between git fetch and git pull
- Use git fetch if you just want to check updates first.
- Use git pull if you want to get updates directly.

<br>

11. Grid vs Flex
- <b>What?</b> Grid is for 2D layouts (rows & columns), Flex is for 1D layouts (row or column).
- <b>When?</b> Use Grid for complex layouts, Flex for simple alignment.
<b>Why?</b> Grid provides precise control, Flex is more flexible for dynamic content.

12. Media Query
- A CSS rule to make websites responsive. it adjust styles based on screen size and ensures a good user experience on all devices. 🚀

## Basic 
- <b>Semantic tags:</b> provide meaning to the content, improving accessibility and SEO.
    - header, nav, section, article, aside, footer, main, em, figure, figcaption

- <b>Git</b> is a <b>distributed</b> version control system because every developer has a full copy of the entire repository, including its history, allowing them to work independently without relying on a central server

### HTML vs HTML5
<b>HTML5</b> is an upgraded, feature-rich version of HTML with better multimedia, form controls, and responsiveness. Also <b>better semantics & SEO</b>

![html5](images/html_vs_html5.png)

<b>Flash</b> was a multimedia software platform developed by <b>Adobe</b> for creating animations, interactive content, and web applications. It was widely used for videos, games, and rich media content on websites. Flash relied on a browser plugin (Adobe Flash Player) to run. <br>
<b>End of Flash:</b> Adobe officially discontinued Flash on December 31, 2020. 🚫

### CSS vs CSS3
<b>CSS3</b> is an upgraded version of CSS with modular improvements, advanced selectors (before only id, class, element), responsive design (@media queries), animations (@keyframes, transition), and modern layout techniques (Flexbox, Grid). It also introduces enhanced styling features like border-radius, box-shadow, and custom fonts (@font-face). These enhancements make web design more efficient, responsive, and visually appealing while reducing reliance on images and JavaScript.

### 5 things for responsiveness
1. Break points
2. Media query
3. style changes
4. image fluid
5. relative measuring units and Testing!