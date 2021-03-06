import Link from "next/link";
import Cart from "../../components/Cart";
import { CartSummary } from "../../components/CartSummary";
import Products from "../../components/Products";
import { client } from "../../lib/sanity/client";
import { Nav } from '../../components/Nav'
import { productsQuery } from "../../lib/sanity/productsQuery";
import styled from "styled-components";


const ContainerOne = styled.div`

 
  position: relative;
  display: flex;
  margin: 200px 0 0 0;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
`;

const RowUI = styled.div`
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: #484349;
  font-family: "Noto Sans JP", sans-serif;
  width: 50%;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ColumnUI = styled.div`
 

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #484349;
  width: 50%;

  @media (max-width: 1500px) {
    flex-direction: column;
    width: 80%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;


const HeaderUI = styled.h3`
  font-size: 56px;
  font-weight: 900;
  width: 100%;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #ed2224;
  color: white;
  margin: 0;

`;

const TextUI = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
  width: 100%;
  margin: 0;
  margin: 50px 0 0px 0;
`;


const AlertUI = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  width: 100%;
  margin: 0;
  margin: 50px 0;
  color: #ed2224;
`;


const Merch = ({ products }) => {
  return (
    <ContainerOne>
 

<ColumnUI>

<HeaderUI>Cart</HeaderUI>

<AlertUI>* All made to order items must be picked up at our restaurant, pickup dates vary.</AlertUI>


<CartSummary/>

</ColumnUI>


    
    </ContainerOne>
  );
};

export default Merch;

export async function getStaticProps({ params }) {
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
    },
  };
}