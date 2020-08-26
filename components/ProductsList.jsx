import React from 'react';
import { Button, Image, View } from 'react-native';
import { StyleSheet, Text } from "react-native";

const mockProductsData = [
    {
        barcode: 0,
        brand: "Alpro",
        name: "Almond milk",
        ingredients: "Water, Almond (2.3%), Calcium (Tri-Calcium Phosphate), Sea Salt, Stabilisers (Locust Bean Gum, Gellan Gum), Emulsifier (Lecithins (Sunflower)), Vitamins (B2, B12, E)",
        description: "Almond drink with added calcium and vitamins. Alpro Almond Unsweetened is simply versatile. It's delicate roasted taste makes it the perfect match with fresh fruits and even chocolate! 100% plant based, low in fat and has no sugars or sweeteners at all!",
        imgUrl: "https://www.kindpng.com/picc/m/164-1643413_almond-milk-png-alpro-roasted-almond-milk-transparent.png",
        nutritionalScore: "B",
        improvement: "50%",
        price: 13.90,
    },
    {
        barcode: 1,
        brand: "Oatly",
        name: "Oat milk",
        ingredients: "Oat base (water, oats 10%), rapeseed oil, calcium carbonate, calcium phosphates, iodised salt, vitamins (D2, riboflavin, B12)",
        description: "The Original Oat Drink in an ambient carton! It's sustainable and totally vegan with a dairy-free oatsome taste. Use it wherever you'd use cow's milk.",
        imgUrl: "https://www.mattas.co.uk/wp-content/uploads/2018/05/oat-drink.png",
        nutritionalScore: "A",
        improvement: "60%",
        price: 12.90,
    },
    {
        barcode: 2,
        brand: "Tnuva",
        name: "Milk 1% Fat",
        ingredients: "Milk, Sea Salt, Stabilisers (Locust Bean Gum, Gellan Gum), Vitamins (B2, B12, E, D2)",
        description: "description",
        imgUrl: "https://lh3.googleusercontent.com/proxy/yqjcLEZorsknQBI92B6NHufE_DeUUw9_7TxuP-6IWCCPzS15EVbGt3oXWj6FqOXyebgUQAWEllrpHCu9eDQwOnQwO-_nPhKaaqFkn95HCYl91DS2_qamlkX8mDU2MaYCdRlVSwo",
        nutritionalScore: "D",
        improvement: "20%",
        price: 6.90,
    },
]

const calcImprovement = (input, recommended) => {
    const improvement = (recommended - input) / input;
    const improvementPercentage = Math.floor(improvement * 100);
    return improvementPercentage;
}

const getPrice = (min, max) => {
    let productPrice;
    productPrice = Math.floor(Math.random() * (max - min) + min);
    return productPrice;
}

const getImgUrl = (prodBarcode) => {
    if (prodBarcode === 73410135471) {
        return "https://images-na.ssl-images-amazon.com/images/I/81-2VdnKTNL._SL1500_.jpg";
    } else if (prodBarcode === 75925401294) {
        return "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_af0b2c81-4522-45e4-8554-c45c7e7bf8ab.png";
    } else {
        return "https://dks22p812qygs.cloudfront.net/UserFiles/ib_product/Silver-Hills-Sprouted-Organic-Ancient-Grains-The-Queen-s-Khorasan-Loaf-510G-190x190.jpg";
    }
}

const ProductsList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <Text style={styles.titleText}>Recommended Alternatives</Text>
            </View>
            {props.productsData.map(product =>
                <View key={product.barcode} style={styles.itemContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: getImgUrl(product.barcode) }}
                        // source={{ uri: product.imageUrl }}
                    />
                    <View style={styles.productContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.boldText}>{product.name}</Text>
                            <Text style={styles.boldText}>${getPrice(5, 10)}</Text>
                        </View>

                        <Text>{product.brand}</Text>

                        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                            <View style={styles.scoreContainer}>
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{product.nutriscore_grade.toUpperCase()}</Text>
                                <Text style={styles.smallText}>Nutrional</Text>
                                <Text style={styles.smallText}>Score</Text>
                            </View>
                            <View style={styles.improvementContainer}>
                                <Text style={{ color: "#43C95F", fontSize: 20, fontWeight: "bold" }}>{calcImprovement(product.before_nutriscore, product.nutriscore)}%</Text>
                                <Text style={{ color: "#43C95F", fontSize: 10 }}>healthier</Text>
                            </View>
                        </View>
                    </View>

                    {/* <Text style={styles.ingredients}>Ingredients: {product.ingredients}</Text> */}
                </View>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        height: '90%',
        borderRadius: 20
    },
    itemContainer: {
        display: "flex",
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
    },
    infoContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    productContainer: {
        display: "flex",
        flex: 1,
        padding: 5,
    },
    scoreContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "#43C95F",
        color: "white",
        marginRight: 5
    },
    improvementContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        backgroundColor: "#F5F5F5",
        color: "#43C95F"
    },
    image: {
        backgroundColor: "white",
        marginRight: 10,
        width: 110,
        height: 110,
        borderRadius: 20
    },
    ingredients: {
        backgroundColor: "#C2CBDB",
        color: "white",
        fontSize: 10,
        padding: 5
    },
    smallText: {
        fontSize: 10,
        color: "white"
    },
    titleText: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
    },
    boldText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    titleBar: {
        padding: 20,
    }
});

export default ProductsList;