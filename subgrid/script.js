/**
 * Appends n spans as children to el
 * @param {Node} el parent element
 * @param {Number} n number of items to append as children
 */
function makeItems ({ el, n }) {
    for (let i = 1; i <= n; i++) {
      const span = document.createElement('span')
      span.textContent = i
      span.setAttribute('data-i', i)
      el.appendChild(span)
    }
  }
  
  const grids = Array.from(document.querySelectorAll('[data-n]'))
  
  grids.forEach(grid => {
      makeItems({
          el: grid,
          n: grid.dataset.n
      })
  })
  