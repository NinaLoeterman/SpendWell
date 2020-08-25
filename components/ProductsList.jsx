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

const ProductsList = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBar}>
                <Text style={styles.titleText}>Recommended Alternatives</Text>
            </View>
            {mockProductsData.map(product =>
                <View key={product.barcode} style={styles.itemContainer}>
                    {/* <View style={{ display: "flex", flexDirection: "row", }}> */}
                    <Image
                        style={styles.image}
                        source={{ uri: product.imgUrl }}
                    />
                    <View style={styles.productContainer}>
                        <View style={styles.infoContainer}>
                            <Text style={styles.boldText}>{product.name}</Text>
                            <Text style={styles.boldText}>${product.price}</Text>
                        </View>

                        <Text>{product.brand}</Text>

                        <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
                            <View style={styles.scoreContainer}>
                                <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>{product.nutritionalScore}</Text>
                                <Text style={styles.smallText}>Nutrional</Text>
                                <Text style={styles.smallText}>Score</Text>
                            </View>
                            <View style={styles.improvementContainer}>
                                <Text style={{ color: "#43C95F", fontSize: 20, fontWeight: "bold" }}>{product.improvement}</Text>
                                <Text style={{ color: "#43C95F", fontSize: 10 }}>healthier</Text>
                            </View>
                        </View>
                    </View>
                    {/* </View> */}

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
        marginVertical: 5,
        marginHorizontal: 10,
        padding: 10,
        // backgroundColor: '#43C95F80',
        backgroundColor: "rgb(240,240,240)",
        borderRadius: 20
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
        backgroundColor: "white",
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
        backgroundColor: "#43C95F",
        color: "white",
        fontSize: 12,
        padding: 5,
        borderRadius: 20,
    },
    smallText: {
        fontSize: 10,
        color: "white"
    },
    titleText: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        // color: "#43C95F",
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