import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";

const CategoryPage = () => {
    const { fetchProductsByCategory, products } = useProductStore();

    useEffect(() => {
        fetchProductsByCategory("Weird Doors");
    }, [fetchProductsByCategory]);

    console.log("products:", products);
    return <div>CategoryPage</div>
}

export default CategoryPage;