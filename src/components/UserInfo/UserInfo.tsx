import { useAppSelector } from "../../hooks/hooks";
import { selectUserName } from "../../redux/auth/authSelectors";
import { UserName } from "./UserInfo.styled";

const UserInfo = () => {
  const name = useAppSelector(selectUserName);
  return (
    <>
      <UserName>{name}</UserName>
    </>
  );
};

export default UserInfo;
