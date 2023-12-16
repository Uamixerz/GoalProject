import { Text, View } from "react-native";
import OwnUserCard from "../../Components/user/OwnUserCard.tsx";
import Background from "../../Components/Background.tsx";
import { useDispatch, useSelector } from "react-redux";

const UserScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any)=> state.auth.user);
  return (
    <Background containerStyle={{ maxWidth: 999999, padding: 0, justifyContent: 'flex-start' }}>
      <OwnUserCard
        id={1}
        name={(user.nickname?user.nickname:'unknown name')}
        description={(user.description?user.description:'')}
        image_url={`https://huggingface.co/datasets/huggingfacejs/tasks/resolve/main/image-classification/image-classification-input.jpeg`}
      ></OwnUserCard>
    </Background>
  );
};
export default UserScreen;
