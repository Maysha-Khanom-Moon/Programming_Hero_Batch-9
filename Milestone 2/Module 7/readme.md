## css measuring units
1. px -- absolute length
    - 1px ~ 1/96 inch. (assuming a standard screen resolution of 96 PPI - pixel per inch)

2. % -- relative to the value of parent element

3. em -- relative to the font-size of the parent element

4. rem -- relative to font-size of the root element

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

css always follows <b>bottom(latest)</b> styles

<br>

<b>Responsiveness:</b> ability to adapt and function well on different devices and screen sizes