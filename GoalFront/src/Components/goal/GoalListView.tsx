import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {IGoalItem} from "./types";
import GoalCard from "./GoalCard.tsx";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    margin: 0,
    padding: 0
  },
});

interface IProps {
  list: IGoalItem[];
}

const GoalListView: React.FC<IProps> = ({list}) => (
  <View style={styles.container}>
    <FlatList
      data={list}
      renderItem={({ item }) =>
        <GoalCard
          id={item.id}
          title={item.name}
          description={item.description}
          image_url={`https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg`}
        />}
    />
  </View>
);

export default GoalListView;
