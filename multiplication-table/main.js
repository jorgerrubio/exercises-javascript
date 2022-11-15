(() => {
    const form = document.getElementById('form');
    const container = document.getElementById('container');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        var formData = new FormData(e.target);
        const { from, to } = Object.fromEntries(formData)
        container.innerText = ''
        for (let i = from; i <= to; i++){
            const table = createTable(i);
            container.append(table);
        }
    });

    const createTable = (num) => {
        const table = document.createElement('table');
        table.classList.add('table');

        for (let i = 0; i <= 10; i++) {
            const tr = document.createElement('tr');
            [num, 'x', i, num * i].map(element => {
                tr.append(createCell(element));
            });
            table.append(tr);
        }
        return table;
    }

    const createCell = (inner) => {
        const td = document.createElement('td');
        td.innerText = inner;
        return td;
    }
})()