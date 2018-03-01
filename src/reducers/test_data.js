const myTask1 = {
    id: '9872344324',
    title: 'My first task title',
    content: 'This is a markdown flavoured thing.\n## Second level header\nLorem ipsum.\n### Third level header\nsuch is cool wow',
    priority: 4,
    status: 3,
    list: '8273'
}

const myTask2 = {
    id: '918346722',
    title: 'my second task title',
    content: '# Header 1\n[Link to google](http://www.google.com)\n## Header 2 \nSome content lorem ipsum-esque',
    priority: 2,
    status: 2,
    list: '8273'
}


const myTask3 = {
    id: '122832722',
    title: 'my third task title',
    content: '# Header 1\n[Link to google](http://www.google.com)\n## Header 2 \nSome content lorem ipsum-esque',
    priority: 1,
    status: 1,
    list: '1234',
    color: 'purple'
}

const list1 = {
    id: '8273',
    tasks: [
        myTask1,
        myTask2
    ],
    title: 'My tasklist number one',
    owner: 'teppo',
    color: 'blue'
}

const list2 = {
    id: '1234',
    tasks: [
        myTask3
    ],
    title: 'My tasklist number two',
    owner: 'teppo',
    color: 'green'
}

const test_data = [list1, list2]

export default test_data