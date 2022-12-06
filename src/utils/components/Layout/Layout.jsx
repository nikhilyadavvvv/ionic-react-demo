import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemGroup,
  IonLabel,
  IonList,
  IonTitle,
  IonItemDivider,
  IonToolbar,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonRow,
  IonCol,
  IonGrid,
  IonText,
  IonMenuButton,
  IonMenu,
} from "@ionic/react";
import React from "react";
import * as Icon from "ionicons/icons";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  const text = "";
  const number = 0;
  return (
    <IonContent id="sidebarContent">
      <IonToolbar>
        <IonTitle>Compliance Mall</IonTitle>
        <IonButtons slot="start">
          <IonMenuButton menu="first" autoHide={true} />
        </IonButtons>
        <IonButtons slot="secondary">
          <IonButton>
            <IonIcon slot="icon-only" icon={Icon.personCircle} />
          </IonButton>
          <IonButton>
            <IonIcon slot="icon-only" icon={Icon.cart} />
          </IonButton>
          <IonText>
            <span style={{ marginLeft: "-13px" }}>0</span>
          </IonText>
        </IonButtons>
      </IonToolbar>
      <div style={{ padding: "10px" }}>
        <IonList>
          <IonItem>
            <IonLabel position="floating">Search</IonLabel>
            <IonInput placeholder="Search"></IonInput>
          </IonItem>
          {children}
        </IonList>
      </div>
      <Sidebar />
    </IonContent>
  );
};

export default Layout;