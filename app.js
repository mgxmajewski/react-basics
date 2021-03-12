const title = React.createElement(
    'h1',
    { id:'main-title', title: 'This is a title.' },
    'My first React Element!'
);

ReactDOM.render(
    title,
    document.getElementById('root')
);

console.log(title);