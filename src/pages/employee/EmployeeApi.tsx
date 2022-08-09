import Employee from "./Employee";

export function searchEmployees(){
  if(!localStorage['employees']){
    localStorage['employees'] = '[]';
  }

  let employees = localStorage['employees']
  employees = JSON.parse(employees)
  return employees

}

export function removeEmployee(id: string){
  let employees = searchEmployees()

  let i = employees.findIndex((employee:Employee) => employee.id === id)
  employees.splice(i, 1)
  localStorage['employees'] = JSON.stringify(employees)
}

export function saveEmployee(employee:Employee){
  let employees = searchEmployees()
  if(employee.id){
    //editar
    let i = employees.findIndex((c:Employee) => c.id === employee.id)
    employees[i] = employee
  } else {
    //nuevo
    employee.id = String(Math.round(Math.random() * 10000))
    employees.push(employee)
  }
  localStorage['employees'] = JSON.stringify(employees)
}

export function searchEmployeeById(id:string){
  let employees = searchEmployees()
  return employees.find((employee:any) => employee.id == id)
}