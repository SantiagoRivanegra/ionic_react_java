import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomers } from './CustomerApi';

const CustomerList: React.FC = () => {  
  const { name } = useParams<{ name: string; }>();  
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory()
  
  useEffect(() => {
    search()
  }, [])
  
  const search = () => {
    let resultado = searchCustomers()
    setClientes(resultado)
  }

  const remove = (id:string) => {
    removeCustomer(id)
    search()
  }

  const pruebaLocalStorage = () => {
    const ejemplo = {
      id: '1',
      firstName: 'Santi',
      lastName: 'Riva'
    }
    saveCustomer(ejemplo)
  }

  const addCustomer = () => {
    history.push('/page/customer/new')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name} </IonTitle>
          </IonToolbar>
        </IonHeader>
        
  <IonContent>
    <IonCard>
      <IonTitle>Gestión de clientes</IonTitle>

      <IonItem>
        <IonButton onClick={addCustomer} color="primary" fill="solid" slot="end" size="default">
          <IonIcon icon={add} />
          Agregar Cliente
        </IonButton>
      </IonItem>

    <IonGrid className="table">
      <IonRow>
        <IonCol>Nombre</IonCol>
        <IonCol>Email</IonCol>
        <IonCol>Dirección</IonCol>
        <IonCol>Telefono</IonCol>
        <IonCol>Acciones</IonCol>
      </IonRow>


      {clientes.map((cliente:any) =>
      <IonRow>
        <IonCol>{cliente.firstName} {cliente.lastName}</IonCol>
        <IonCol>{cliente.email}</IonCol>
        <IonCol>{cliente.address}</IonCol>
        <IonCol>{cliente.phone}</IonCol>
        <IonCol>
          <IonButton color="primary" fill="clear">
            <IonIcon icon={pencil} slot="icon-only"/>
          </IonButton>

          <IonButton onClick={() => remove(cliente.id)} color="danger" fill="clear">
            <IonIcon icon={trashBin} slot="icon-only"/>
          </IonButton>
        </IonCol>
      </IonRow>
        )}
    </IonGrid>
    </IonCard>

    <IonButton onClick={pruebaLocalStorage} color="danger" fill="clear">
          PRUEBA LOCAL STORAGE
    </IonButton>

  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;