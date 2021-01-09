# CSS Grid

https://css-tricks.com/snippets/css/complete-guide-grid/

Basic structure:

container:
    display: grid;
    grid-template-columns
    grid-template-rows
    child:
        grid-column
        grid-row

My notes:

- If we need a repeated layout, use the repeat function
- grid-template-areas for labeling layout areas, so that they are easy to understand
- If we want to create a layout which has boxes in specific places, use grid-auto-columns and grid-column + grid-row
- If we want to have boxes in specific places and the non positioned boxes fix the remaining space automatically, use grid-auto-flow
- To position boxes in a grid without specifying the grid beforehand, use grid-area
- Box size is a length, it can be any length unit, but also fr, min-content and max-content. Also use minmax() to set a min and max size