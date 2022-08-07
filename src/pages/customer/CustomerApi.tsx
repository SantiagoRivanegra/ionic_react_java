export function searchCustomers(){
  if(!localStorage['customers']){
    localStorage['customers'] = '[]';
  }

  let customers = localStorage['customers']
  customers = JSON.parse(customers)
  return customers

}

export function removeCustomer(id: string){
  let customers = searchCustomers()

  let i = customers.findIndex((c:any) => c.id === id)
  customers.splice(i, 1)
  localStorage['customers'] = JSON.stringify(customers)
}

export function saveCustomer(customer:any){
  let customers = searchCustomers()
  customers.push(customer)
  localStorage['customers'] = JSON.stringify(customers)
}