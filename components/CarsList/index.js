import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import CarItem from "../CarItem";
import styles from "./style";
import cars from "./cars";

const Carslist = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToAlignment={"start"}
        declarationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default Carslist;
