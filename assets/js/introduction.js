const toolTipElements = document.querySelectorAll('.tooltip')
const newToolTip = (function () {
    for (let i = 0; i < toolTipElements.length; i++) {
        const aElement = document.createElement('a')
        const spanElement = document.createElement('span')
        aElement.textContent = toolTipElements[i].innerText
        toolTipElements[i].innerText = ''
        aElement.setAttribute('href', toolTipElements[i].dataset.url)
        
        if (toolTipElements[i].dataset.tooltipType === 'text') {
            spanElement.classList.add('tooltip__box--text')
            spanElement.classList.add('tooltip__box')
            spanElement.innerText = toolTipElements[i].dataset.tooltipContent
        }
        if (toolTipElements[i].dataset.tooltipType === 'image') {
            spanElement.classList.add('tooltip__box--image')
            spanElement.classList.add('tooltip__box')
            const spanImage = document.createElement('img')
            spanImage.classList.add('tooltip__image')
            spanImage.setAttribute('src', toolTipElements[i].dataset.tooltipContent)
            spanElement.appendChild(spanImage)
        }
        toolTipElements[i].appendChild(aElement)
        toolTipElements[i].appendChild(spanElement)
    }
})()
