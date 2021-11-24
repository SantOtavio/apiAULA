function tabela() {
    const table = document.createElement('table');
    const row = document.createElement('tr');
    const columnName = document.createElement('th');
    const columnUserName = document.createElement('th');
    const columnBirthDate = document.createElement('th');

    columnName.innerText = 'Nome';
    columnUserName.innerText = 'Sobrenome';
    columnBirthDate.innerText = 'Data Nascimento';

    row.appendChild(columnName);
    row.appendChild(columnUserName);
    row.appendChild(columnBirthDate);
    table.appendChild(row);

    document.body.appendChild(table);
}