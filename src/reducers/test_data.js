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

const list1 = {
    id: '8273',
    tasks: [
        myTask1,
        myTask2
    ],
    title: 'My tasklist number one',
    owner: 'teppo'
}

const list2 = {
    id: '1234',
    tasks: [
        myTask1,
        myTask2
    ],
    title: 'My tasklist number two',
    owner: 'teppo'
}

const test_data = [list1, list2]

export default test_data