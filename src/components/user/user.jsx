import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user);
  const { getUserById } = useActions();

  if (isLoading) {
    return <p>...Loading</p>;
  }

  return (
    <>
      {!user.name && <button onClick={() => getUserById(2)}>Get user</button>}
      {error ? (
        <div>{error}</div>
      ) : (
        user.name && <div> Hello! {user?.name}</div>
      )}
    </>
  );
};

export default User;
