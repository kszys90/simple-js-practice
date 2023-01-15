const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }

];

const articleList = document.querySelector('.article__list')
const ulElement = document.createElement('ul')
articleList.appendChild(ulElement)
list.forEach(function (element) {
    const liElement = document.createElement('li')
    const aElement = document.createElement('a')
    liElement.appendChild(aElement)
    aElement.href = element.link
    aElement.innerText = element.text
    liElement.setAttribute('data-id', element.id)
    if (element.parentId === null) {
        ulElement.appendChild(liElement)
    }
    if (element.parentId !== null) {
        const liElementList = ulElement.querySelectorAll('li')
        const parentId = Number(element.parentId)
        const parent = list.filter(function (element) {
            return element.id === parentId
        })
        const ulElement2 = document.createElement('ul')
        ulElement2.appendChild(liElement)

        ulElement.appendChild(ulElement2)
    }
})