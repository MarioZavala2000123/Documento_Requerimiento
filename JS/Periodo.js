const url = 'http://147.182.187.126/attendance/periodo'
const opts = { crossDomain: true}

const idperiodo = document.getElementById('idPeriodo')
const txtDescripcionActividad = document.getElementById('txtDescripcionActividad')
const myTableActividad = document.getElementById('myTableActividad')
const txtDesc = document.getElementById('txtDesc')
const txtIdUpdate = document.getElementById('txtIdUpdate')
const txtCre = document.getElementById('txtCre')
const table = document.getElementById('testBodyActividad')

function fetchActividades(){
  console.log(idperiodo.value)
    fetch(url + "/" + idperiodo.value )
    .then(response => response.json())
    .then(data => loadTableData(data))
  }

function fetchSaveActividades(){
    var nombresD = txtDescripcionActividad.value
    console.log(nombresD)
    
  var data = { 
              nombre: nombresD,
          //    creditos: 7
        }

    fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err))

      txtDescripcionActividad.value = ""
      fetchActividades()
    
}

function fetchUpdateActividades(){
  console.log($("#txtIdUpdate").val())

  var des = $("#txtDesc").val()
  var id = $("#txtIdUpdate").val()
  var cre = $("#txtCre").val()
  console.log(id)
  console.log(des)
  fetch(url, {
      method: "PUT",
      body: JSON.stringify({"idPeriodo" : id , "nombre" : des , "creditos":cre }),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json))
    .catch(err => console.log(err))

  
  
}

  function loadTableData(items){
    console.log(items)
    table.innerHTML = ''
    console.log(Object.keys(items).length)
    if(Object.keys(items).length < 2){
      let row = table.insertRow();
      let idActividad = row.insertCell(0)
      idActividad.innerHTML = items[item].idPeriodo
      let descripcion = row.insertCell(1)
      descripcion.innerHTML = items[item].descripcion
      let fechaInicial = row.insertCell(2)
      fechaInicial.innerHTML = items[item].fechaInicial
      let fechaFinal = row.insertCell(3)
      fechaFinal.innerHTML = items[item].fechaFinal
      let edit = row.insertCell(4)
      edit.innerHTML = '<a class="btn btn-primary btn-lg"  role="button" id="btnfind4" onclick="openModal() ">Select</a>'

    }else {
      for(item in items){
        let row = table.insertRow();
        let idActividad = row.insertCell(0)
      idActividad.innerHTML = items[item].idPeriodo
      let descripcion = row.insertCell(1)
      descripcion.innerHTML = items[item].descripcion
      let fechaInicial = row.insertCell(2)
      fechaInicial.innerHTML = items[item].fechaInicial
      let fechaFinal = row.insertCell(3)
      fechaFinal.innerHTML = items[item].fechaFinal
      let edit = row.insertCell(4)
        edit.innerHTML = '<a class="btn btn-primary btn-lg"  role="button" id="btnfind4" onclick="openModal()">Select</a>'
    }
    }
    
}

function openModal(){
  console.log('entra en función')
  var table = document.getElementById('testBodyActividad');
  var idPeriodo1 = document.getElementById('id');
  console.log(idPeriodo1)
  console.log(table)
  var cells = table.getElementsByTagName('td');
  for (var i = 0; i < cells.length; i++) {
    var cell = cells[i];
    cell.onclick = function () {
        
        var rowId = this.parentNode.rowIndex-1;
        console.log("print row id")
        console.log(rowId)
        var rowSelected = table.getElementsByTagName('tr')[rowId];
        console.log(rowSelected)
        console.log(rowSelected.cells[0].innerHTML)
      window.localStorage.setItem('id', rowSelected.cells[0].innerHTML);
        rowSelected.className += " selected";
                 
    }
    window.location.href = "Docente-Tecleo.html";
}
  
}