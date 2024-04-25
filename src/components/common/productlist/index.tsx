import React from 'react'
import { Container, InfoLikeContainer, LikeButton, LikeIcon, ProductImage, ProductInfoContainer, ProductPrice, ProductTitle, PublishedText, SellerInfoContainer, SellerName, ProductPriceTittleContainer } from './styled';
import { FlatList, Alert, ListRenderItem } from 'react-native';


const like = require("../../../../assets/icons/like.png");
const liked = require("../../../../assets/icons/liked.png");


export interface ProductType {
  _id: string;
  productImage: string;
  price: string;
  name: string;
  publishedData: string;
  SellerName: string;
  liked: boolean;
}

const Data = [
  {
    _id: "1",
    productImage:
      "https://cdn.awsli.com.br/600x1000/257/257889/produto/219772905/primeira-2ss4six4lb.png",
    price: "2600",
    name: "Air Jordan Travis Scott",
    publishedData: "24/04/2024",
    SellerName: "Mateus Franco",
    liked: false,
  },
  {
    _id: "2",
    productImage:
      "https://cdn.awsli.com.br/600x1000/257/257889/produto/219772905/primeira-2ss4six4lb.png",
    price: "3600",
    name: "Air Jordan Travis Scott",
    publishedData: "24/04/2024",
    SellerName: "Mateus Franco",
    liked: true,
  },
  {
    _id: "3",
    productImage:
      "https://cdn.awsli.com.br/600x1000/257/257889/produto/219772905/primeira-2ss4six4lb.png",
    price: "3600",
    name: "Air Jordan Travis Scott",
    publishedData: "24/04/2024",
    SellerName: "Mateus Franco",
    liked: false,
  },
  {
    _id: "4",
    productImage:
      "https://cdn.awsli.com.br/600x1000/257/257889/produto/219772905/primeira-2ss4six4lb.png",
    price: "3600",
    name: "Air Jordan Travis Scott",
    publishedData: "24/04/2024",
    SellerName: "Mateus Franco",
    liked: true,
  },
  {
    _id: "5",
    productImage:
      "https://cdn.awsli.com.br/600x1000/257/257889/produto/219772905/primeira-2ss4six4lb.png",
    price: "3600",
    name: "Air Jordan Travis Scott",
    publishedData: "24/04/2024",
    SellerName: "Mateus Franco",
    liked: false,
  },
];

const ProdutList = () => {
  const Item = ({data}:{data: ProductType} ) => (
    <Container activeOpacity={0.85} onPress={() =>{
      Alert.alert("Navegação para o produto")
    }}>
    <ProductImage source={{ uri: data.productImage}} />
    <ProductInfoContainer>
      <ProductPriceTittleContainer>
      <ProductPrice>R$ {data.price}</ProductPrice>
      <ProductTitle numberOfLines={2}>{data.name}</ProductTitle>
      </ProductPriceTittleContainer>
      <InfoLikeContainer>
        <SellerInfoContainer>
          <PublishedText>Publicado em {data.publishedData}</PublishedText>
          <SellerName>{data.SellerName}</SellerName>
        </SellerInfoContainer>
        {!data.liked? (
          <LikeButton onPress={() =>{
            Alert.alert("Você deu like")
          }}>
          <LikeIcon source={like} />
        </LikeButton>
        ): (
          <LikeButton>
          <LikeIcon source={liked} />
        </LikeButton>
        ) }
      </InfoLikeContainer>
    </ProductInfoContainer>
  </Container>
  );

  const renderItem: ListRenderItem<ProductType> = ({item}) => (
    <Item data={item}/>
    )

  return (
    <FlatList
      data={Data}
      keyExtractor={(item:ProductType) => item._id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 80 }}
    />
  );
};

export default ProdutList;