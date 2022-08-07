import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, pencil, trashBin } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CustomerList: React.FC = () => {  
  const { name } = useParams<{ name: string; }>();  
  const [clientes, setClientes] = useState<any>([]);
  
  useEffect(() => {
    search()
  }, [])
  
  const search = () => {
    const datosDeEjmplo = [
      {
        id: '1',
        firstName: 'John',
        lastName: 'Don',
        email: 'asdas',
        phone: '0303456',
        address: 'rosario',

      },
      {
        id: '2',
        firstName: 'juan',
        lastName: 'pedro',
        email: 'asafregts',
        phone: '03456',
        address: 'rio',

      }
    ];
    setClientes(datosDeEjmplo)
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
        <IonButton color="primary" fill="solid" slot="end" size="default">
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

          <IonButton color="danger" fill="clear">
            <IonIcon icon={trashBin} slot="icon-only"/>
          </IonButton>
        </IonCol>
      </IonRow>
        )}
    </IonGrid>
    </IonCard>
  </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;