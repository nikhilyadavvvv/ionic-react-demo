import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
  IonMenuToggle,
  IonButton,
} from "@ionic/react";
import React from "react";

const Sidebar = () => {
  return (
    <IonMenu side="start" menuId="first" contentId="sidebarContent">
      <IonHeader mode="md">
        <IonToolbar>
          <IonTitle>Hello User</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonMenuToggle>
          <ion-item>
            {" "}
            <IonButton color="dark">x</IonButton>{" "}
          </ion-item>
        </IonMenuToggle>
        <IonList>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
          <IonItem>Menu Item</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Sidebar;
