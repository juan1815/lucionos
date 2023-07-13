var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('¿Estas seguro de eliminar este dato?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}






// BOTONES IMPORTANTES DE pdf excel y praint
let dataTable;
let dataTableIsInitialized = false;
let dataTableOptions = {
    dom: 'Bfrtilp',
    buttons: [
      {
        extend: 'excelHtml5',
        text: '<i class="fas fa-file-excel"></i> ',
        titleAttr: 'Exportar a Excel',
        className: 'btn btn-success',
      },
      {
        extend: 'pdfHtml5',
        text: '<i class="fas fa-file-pdf"></i> ',
        titleAttr: 'Exportar a PDF',
        className: 'btn btn-danger',
      },
      {
        extend: 'print',
        text: '<i class="fa fa-print"></i> ',
        titleAttr: 'Imprimir',
        className: 'btn btn-info',
      },
    ],
    
    pageLength: 3,
    destroy: true,
    language: {
      processing: 'Procesando...',
      lengthMenu: 'Mostrar _MENU_ registros',
      zeroRecords: 'No se encontraron resultados',
      emptyTable: 'Ningún dato disponible en esta tabla',
      infoEmpty: 'Mostrando registros del 0 al 0 de un total de 0 registros',
      infoFiltered: '(filtrado de un total de _MAX_ registros)',
      search: 'Buscar:',
      infoThousands: ',',
      loadingRecords: 'Cargando...',
      paginate: {
        first: 'Primero',
        last: 'Último',
        next: 'Siguiente',
        previous: 'Anterior',
      },
      aria: {
        sortAscending: ': Activar para ordenar la columna de manera ascendente',
        sortDescending: ': Activar para ordenar la columna de manera descendente',
      },
      buttons: {
        copy: 'Copiar',
        colvis: 'Visibilidad',
        collection: 'Colección',
        colvisRestore: 'Restaurar visibilidad',
        copyKeys:
          'Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br /> <br /> Para cancelar, haga clic en este mensaje o presione escape.',
        copySuccess: {
          1: 'Copiada 1 fila al portapapeles',
          _: 'Copiadas %ds fila al portapapeles',
        },
        copyTitle: 'Copiar al portapapeles',
        csv: 'CSV',
        excel: 'Excel',
        pageLength: {
          '-1': 'Mostrar todas las filas',
          _: 'Mostrar %d filas',
        },
        pdf: 'PDF',
        print: 'Imprimir',
        renameState: 'Cambiar nombre',
        updateState: 'Actualizar',
        createState: 'Crear Estado',
        removeAllStates: 'Remover Estados',
        removeState: 'Remover',
        savedStates: 'Estados Guardados',
        stateRestore: 'Estado %d',
      },
      autoFill: {
        cancel: 'Cancelar',
        fill: 'Rellene todas las celdas con <i>%d</i>',
        fillHorizontal: 'Rellenar celdas horizontalmente',
        fillVertical: 'Rellenar celdas verticalmentemente',
      },
      decimal: ',',
      searchBuilder: {
        add: 'Añadir condición',
        button: {
          0: 'Constructor de búsqueda',
          _: 'Constructor de búsqueda (%d)',
        },
        clearAll: 'Borrar todo',
        condition: 'Condición',
        conditions: {
          date: {
            after: 'Despues',
            before: 'Antes',
            between: 'Entre',
            empty: 'Vacío',
            equals: 'Igual a',
            notBetween: 'No entre',
            notEmpty: 'No Vacio',
            not: 'Diferente de',
          },
          number: {
            between: 'Entre',
            empty: 'Vacio',
            equals: 'Igual a',
            gt: 'Mayor a',
            gte: 'Mayor o igual a',
            lt: 'Menor que',
            lte: 'Menor o igual que',
            notBetween: 'No entre',
            notEmpty: 'No vacío',
            not: 'Diferente de',
          },
          string: {
            contains: 'Contiene',
            empty: 'Vacío',
            endsWith: 'Termina en',
            equals: 'Igual a',
            notEmpty: 'No Vacio',
            startsWith: 'Empieza con',
            not: 'Diferente de',
            notContains: 'No Contiene',
            notStartsWith: 'No empieza con',
            notEndsWith: 'No termina con',
          },
          array: {
            not: 'Diferente de',
            equals: 'Igual',
            empty: 'Vacío',
            contains: 'Contiene',
            notEmpty: 'No Vacío',
            without: 'Sin',
          },
        },
        data: 'Data',
        deleteTitle: 'Eliminar regla de filtrado',
        leftTitle: 'Criterios anulados',
        logicAnd: 'Y',
        logicOr: 'O',
        rightTitle: 'Criterios de sangría',
        title: {
          0: 'Constructor de búsqueda',
          _: 'Constructor de búsqueda (%d)',
        },
        value: 'Valor',
      },
        },
    };