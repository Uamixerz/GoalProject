
import React, { useEffect, useState } from "react";
import Background from "../../Components/Background.tsx";
import GoalListView from "../../Components/goal/GoalListView.tsx";
import http_common from "../../http_common.ts";
import { IGetGoalItems, IGoalItem } from "../../Components/goal/types.ts";

const HomeScreen = () => {

  const [list, setList] = useState<IGoalItem[]>([]);

  useEffect(() => {
    try {
      http_common.get<IGetGoalItems>("/api/goal")
        .then(resp => {
          const {data} = resp.data;
          console.log('Goal:  ',data);
          setList(data);
        });
    }
    catch (error)
    {
      console.log('Error ',error);
    }

  }, []);



  return (
    <Background containerStyle={{ maxWidth: 999999 }}>
      <GoalListView list={list}></GoalListView>
    </Background>
  );
};
export default HomeScreen;
