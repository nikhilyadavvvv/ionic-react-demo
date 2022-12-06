import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonImg,
  IonInput,
} from "@ionic/react";
import { pin, wifi, wine, warning, walk } from "ionicons/icons";

const ProductCard = ({ id, product }) => {
  return (
    <>
      <IonCard mode="ios">
        <IonImg
          src={
            product.product_image === ""
              ? "http://placekitten.com/g/400/300"
              : product.product_image
          }
        />
        <IonCardHeader>
          <IonCardSubtitle>{product.category.name}</IonCardSubtitle>
          <IonCardTitle>{product.name}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>Price: {product.price}</IonCardContent>
      </IonCard>
    </>
  );
};

export default ProductCard;
