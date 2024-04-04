import { useParams } from "react-router-dom";

const CoinPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h3>Welcome to CoinPage</h3>
    </div>
  );
};

export default CoinPage;
