## css measuring units
1. px -- absolute length
    - 1px ~ 1/96 inch. (assuming a standard screen resolution of 96 PPI - pixel per inch)

2. % -- relative to the value of parent element

3. em -- relative to the font-size of the parent element

4. rem -- relative to font-size of the root element (default value 16px)

5. vw -- equal to 1% of the width of the browser window size

6. vh -- equal to 1% of the height of the browser window size

<br>

- <b>Absolute:</b> px, in, cm, mm, pt, pc
- <b>Relative:</b>
    - %, vh, vm, vh, vmax, vmin
    - font sizes: em, rem
    - character sizes: ex, ch

- vmax & vmin -- very interesting
    - vmin: use the smallest of the viewport width or height
    - vmax: use the largest of the viewport width or height

<br>

### flex vs grid
- flex ---- unidirectional
- grid ---- bidirectional

### order of specificity: 
1. Inline styles
2. ```!important``` rules
3. ID selector
4. Class selectors, attribute selectors, pseudo-classes
5. Element (tag) selectors
6. Universal selector (*)
7. Order of appearance (bottom --> latest)

<br>

<b>Responsiveness:</b> ability to adapt and function well on different devices and screen sizes