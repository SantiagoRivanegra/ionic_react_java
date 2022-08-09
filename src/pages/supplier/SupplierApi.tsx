import Supplier from "./Supplier";

export function searchSuppliers(){
  if(!localStorage['suppliers']){
    localStorage['suppliers'] = '[]';
  }

  let suppliers = localStorage['suppliers']
  suppliers = JSON.parse(suppliers)
  return suppliers

}

export function removeSupplier(id: string){
  let suppliers = searchSuppliers()

  let i = suppliers.findIndex((supplier:Supplier) => supplier.id === id)
  suppliers.splice(i, 1)
  localStorage['suppliers'] = JSON.stringify(suppliers)
}

export function saveSupplier(supplier:Supplier){
  let suppliers = searchSuppliers()
  if(supplier.id){
    //editar
    let i = suppliers.findIndex((c:Supplier) => c.id === supplier.id)
    suppliers[i] = supplier
  } else {
    //nuevo
    supplier.id = String(Math.round(Math.random() * 10000))
    suppliers.push(supplier)
  }
  localStorage['suppliers'] = JSON.stringify(suppliers)
}

export function searchSupplierById(id:string){
  let suppliers = searchSuppliers()
  return suppliers.find((supplier:any) => supplier.id == id)
}