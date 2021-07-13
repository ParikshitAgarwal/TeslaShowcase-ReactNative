import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagline, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          text="Custom Order"
          onPress={() => {
            console.warn("custom order was pressed");
          }}
        />
        <StyledButton
          type="secondary"
          text="Existing Inventory"
          onPress={() => {
            console.warn("existing inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
