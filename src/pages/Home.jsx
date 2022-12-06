import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import * as Icon from "ionicons/icons";
import { useEffect, useState } from "react";
import Layout from "../utils/components/Layout/Layout";
import ProductCard from "../utils/components/ProductCard/ProductCard";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.example.com/api/products")
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          setProducts(res.data.data);
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
          return err.response;
        }
      });
  }, []);
  return (
    <IonPage>
      <Layout>
        <IonItem>
          <IonGrid fixed="md">
            <IonRow>
              {products.map((product, key) => {
                return (
                  <IonCol size="4">
                    <ProductCard id={key} product={product} />
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </IonItem>
      </Layout>
    </IonPage>
  );
};

export default Home;
