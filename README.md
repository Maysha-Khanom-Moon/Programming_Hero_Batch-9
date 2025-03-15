# Programming Hero Batch 9

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

## Basic
- <b>Semantic tags:</b> provide meaning to the content, improving accessibility and SEO.
    - header, nav, section, article, aside, footer, main, em, figure, figcaption