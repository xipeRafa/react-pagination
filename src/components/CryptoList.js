
import CryptoCard from "./CryptoCard";

const CryptoList = ({ coinsData }) => {
    return (
        <div className='crypto_list'>
            {coinsData.map((coin, index) => (
                    <CryptoCard
                        key={index}
                        image={coin.image}
                        name={coin.name}
                        price={coin.current_price}
                    />
            ))}
        </div>
    );
};

export default CryptoList;
