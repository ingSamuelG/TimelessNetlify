import React, { useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { data } from './PublicData'
var store = require('store')

const AppContext = React.createContext();

function AppProvider({ children }) {

    const toggleSideBar = () => {
        dispatch({ type: "TOGGLE_SIDE" });
    };

    const toggleSideBarAdmin = () => {
        dispatch({ type: "TOGGLE_SIDE_ADMIN" });
    };

    const toggleSearching = (value) => {
        dispatch({ type: "TOGGLE_SEARCH", payload: value });
    };

    const addToCart = (value) => {
        dispatch({ type: "ADD_CART", payload: value });
    };

    const setSubmenuLocation = (location) => {
        dispatch({ type: "SET_SUBMENU_LOCATION", payload: location });
    };

    const setSubmenuOpen = (page, location) => {
        const category = state.categories.find((category) => category.name === page)
        dispatch({ type: "SET_SUBMENU_OPEN" });
        setCurrentCategory(category)
        setSubmenuLocation(location)
    };

    const setFilterSideBarOpen = (value) => {
        dispatch({ type: "SET-FILTER-SIDE-OPEN", payload: value });
    }

    const setSubmenuClosed = () => {
        dispatch({ type: "SET_SUBMENU_CLOSE" });
    };

    const setCurrentCategory = (category) => {
        dispatch({ type: "SET_CURRENT_CATEGORY", payload: category });
    };


    // This is code  is filtering the products, but in the real application this is gonna be done from the api

    const setProductFilterFromColors = (value) => {
        const newProducts = setProductsFromColors(value)
        dispatch({ type: "SET_PRODUCT_FILTER", payload: newProducts });
    };

    const setProductFilterFromCategory = (value) => {
        const newProducts = setProductsFromCategory(value)
        dispatch({ type: "SET_PRODUCT_FILTER", payload: newProducts });
    };

    const setProductFilterFromSubCategory = (value) => {
        const newProducts = setProductsFromSubCategory(value)
        dispatch({ type: "SET_PRODUCT_FILTER", payload: newProducts });
    };

    const setProductFilterFromSize = (value) => {
        const newProducts = setProductsFromSize(value)
        dispatch({ type: "SET_PRODUCT_FILTER", payload: newProducts });
    };

    const setProductFilterFromBrand = (value) => {
        const newProducts = setProductsFromBrand(value)
        dispatch({ type: "SET_PRODUCT_FILTER", payload: newProducts });
    };

    const setProductFilter = (value) => {
        dispatch({ type: "SET_PRODUCT_FILTER", payload: value });
    };


    const resetProductFilter = () => {
        dispatch({ type: "SET_PRODUCT_FILTER", payload: state.products });
    };


    //----------------------------------------------------------------------------------------------


    const setSelecteSize = (value) => {
        dispatch({ type: "SET_SELECTED_SIZE", payload: value });
        console.log(state.sizeSelected)
    };

    const setSelecteQty = (value) => {
        dispatch({ type: "SET_SELECTED_QTY", payload: value });
        console.log(state.qtySelected)
    };

    const toggleTracking = () => {
        dispatch({ type: "TOGGLE-TRACKING" });
    }

    const handlenewOrderState = (value) => {
        dispatch({ type: "SET-NEW-STATE-ORDER", payload: value });
    }

    const setColorFilter = (value) => {
        dispatch({ type: "SET-COLOR-FILTER", payload: value });
    }

    const setCategoryFilter = (value) => {
        dispatch({ type: "SET-CATEGORY-FILTER", payload: value });
    }

    const setSizeFilter = (value) => {
        dispatch({ type: "SET-SIZE-FILTER", payload: value });
    }

    const setBrandFilter = (value) => {
        dispatch({ type: "SET-BRAND-FILTER", payload: value });
    }

    const colorFilterPressed = (value) => {
        dispatch({ type: "SET-COLOR-PRESSED", payload: value });
    }

    const categoryFilterPressed = (value) => {
        dispatch({ type: "SET-CATEGORY-PRESSED", payload: value });
    }

    const subCategoryFilterPressed = (value) => {
        dispatch({ type: "SET-SUBCATEGORY-PRESSED", payload: value });
    }

    const sizeFilterPressed = (value) => {
        dispatch({ type: "SET-SIZE-PRESSED", payload: value });
    }

    const brandFilterPressed = (value) => {
        dispatch({ type: "SET-BRAND-PRESSED", payload: value });
    }

    const setMyAddresses = (value) => {
        console.log("Vieja address")
        console.log(state.myAddresses);
        dispatch({ type: "SET-MY-ADDRESSES", payload: value });
        console.log("nueva address")
        console.log(state.myAddresses);
    }

    const SetMyDefaultAddress = (value) => {
        dispatch({ type: "SET-MY-DEFAULT-ADDRESSES", payload: value });
    }


    const toggleEditFact = () => {
        dispatch({ type: "TOGGLE-EDIT-FACT" });
    }

    const toggleEditEnvio = () => {
        dispatch({ type: "TOGGLE-EDIT-ENV" });
    }

    const setCartCount = () => {
        let value = 0

        try {
            value = store.get("cart").map((order) => {
                return order.qty
            }).reduce((total, current) => {
                return total + current
            })
        } catch (error) {
            value = 0
        }
        dispatch({ type: "SET-CART-COUNT", payload: value });
    }


    const initialState = {
        categories: data.categories,
        subCategories: data.subcategories,
        sideBarOpen: false,
        filterSideBarOpen: false,
        adminSideBarOpen: false,
        myUser: data.user,
        myCart: [],
        searching: false,
        subMenuOpen: false,
        subMenuLocation: {},
        currentCategory: { id: 0, name: '', subcategories: [] },
        products: data.products,
        productsFilter: data.products,
        // # this should load when the user is auth
        myAddresses: data.user.address,
        myDefaultAddress: false,
        sizeSelected: '',
        qtySelected: 1,
        traking: false,
        orders: data.orders,
        newOrderState: 0,
        colors: data.colors,
        sizes: data.sizes,
        brands: data.brands,
        colorFilter: [],
        categoryFilter: [],
        sizeFilter: [],
        brandFilter: [],
        cartCount: 0,
        colorPressed: { name: "", state: false },
        brandPressed: { name: "", state: false },
        subCategoriesPressed: { name: "", state: false },
        categoriesPressed: { name: "", state: false },
        sizePressed: { name: "", state: false },
        productFilter: data.products,
        editOrderFact: false,
        editOrderShip: false,
    }




    const [state, dispatch] = useReducer(reducer, initialState);


    // const fetchProducts = async () => {
    //     setLoading(true)
    //     try {

    //         await apiClient.get('api/user-get-name').then(response => {
    //             setUserName(response.data)

    //         }).catch(error => console.error(error));

    //         await apiClient.get('api/orders').then(response => {
    //             setOrders(response.data)
    //             setError({ error: false, message: "" })

    //         }).catch(error => setLoading(true));

    //         await apiClient.get('api/products').then(response => {
    //             setProducts(response.data)
    //             setError({ error: false, message: "" })
    //             setLoading(false)

    //         }).catch(error => setLoading(true));



    //     } catch (error) {
    //         setLoading(true)
    //     }
    // }




    useEffect(() => {
        setColorFilter(setColorsFromProducts(state.productsFilter))
        setCategoryFilter(setCategoriesFromProducts(state.productsFilter))
        setSizeFilter(setSizesFromProducts(state.productsFilter))
        setBrandFilter(createBrandsFromProducts(state.productsFilter))

    }, [state.productsFilter])

    // -------------------------------------------------------------------------------------------



    const createColorsFromEntry = (entries) => {
        const colors = entries.map((entry) => {
            return { id: entry.color_id, name: entry.color_name, hex: entry.hex } /* [ {entry}, {entry} ] */
        })

        return colors
    }

    const createSizesFromEntry = (entries) => {
        const sizes = entries.map((entry) => {
            return entry.size/* [ {entry}, {entry} ] */
        })

        return sizes
    }


    const setColorsFromProducts = (products) => {
        const entries = products.flatMap((product) => {
            return createColorsFromEntry(product.entry)
        })

        const new_colors = [...new Set(entries.map((color) => { return color.id }))].map((id) => {
            return state.colors.find((color) => color.id == id)
        })

        return new_colors
    }

    const setSizesFromProducts = (products) => {
        const entries = products.flatMap((product) => {
            return createSizesFromEntry(product.entry)
        })

        const new_sizes = [...new Set(entries)]

        return new_sizes
    }

    const createBrandsFromProducts = (products) => {
        const brands = products.map((product) => {
            return product.brand
        })


        const unique_brands = [...new Set(brands.map((brand) => { return brand.id }))].map((id) => {
            return state.brands.find((brand) => brand.id == id)
        })


        return unique_brands
    }

    const setCategoriesFromProducts = (products) => {

        const new_Categories = []
        const categories = products.map((product) => { return { ...product.category, subcategories: [{ ...product.subcategory }] } })

        categories.forEach((item) => {
            if (!new_Categories.some((cat) => cat.id == item.id)) {
                new_Categories.push(item)
            } else {
                const index = new_Categories.findIndex((cat) => cat.id == item.id)
                new_Categories[index].subcategories.push(item.subcategories[0])
            }
        })

        const key = 'name'

        const categoriesWithUniqueSubCategories = new_Categories.map((cat) => {
            return {
                ...cat, subcategories: [...new Map(cat.subcategories.map(item =>
                    [item[key], item])).values()]
            }
        })

        return categoriesWithUniqueSubCategories
    }

    // This is code  is filtering the products, but in the real application this is gonna be done from the api


    const setProductsFromColors = (colorId) => {
        const newProducts = state.productsFilter.filter((product) => {
            return product.entry.some((en) => en.color_id == colorId)
        })
        return newProducts
    }

    const setProductsFromCategory = (catId) => {
        const newProducts = state.productsFilter.filter((product) => {
            return product.category.id == catId
        })
        return newProducts
    }

    const setProductsFromSubCategory = (subCatId) => {
        const newProducts = state.productsFilter.filter((product) => {
            return product.subcategory.id == subCatId
        })
        return newProducts
    }

    const setProductsFromSize = (size) => {
        const newProducts = state.productsFilter.filter((product) => {
            return product.entry.some((en) => en.size == size)
        })
        return newProducts
    }

    const setProductsFromBrand = (brandID) => {
        const newProducts = state.productsFilter.filter((product) => {
            return product.brand.id == brandID
        })
        return newProducts
    }


    // console.log(setCategoriesFromProducts(data.products))

    return (<AppContext.Provider
        value={{
            ...state,
            toggleSideBar,
            toggleSearching,
            setSubmenuOpen,
            setSubmenuClosed,
            setSelecteSize,
            toggleTracking,
            toggleSideBarAdmin,
            handlenewOrderState,
            toggleEditFact,
            toggleEditEnvio,
            setColorFilter,
            setProductFilterFromColors,
            setProductFilter,
            resetProductFilter,
            colorFilterPressed,
            setCategoryFilter,
            setProductFilterFromCategory,
            categoryFilterPressed,
            setProductFilterFromSubCategory,
            subCategoryFilterPressed,
            setFilterSideBarOpen,
            setSizeFilter,
            setBrandFilter,
            setProductFilterFromSize,
            setProductFilterFromBrand,
            brandFilterPressed,
            setSelecteQty,
            sizeFilterPressed,
            setCartCount,
            addToCart,
            setMyAddresses,
            SetMyDefaultAddress
        }
        }
    >
        {children}
    </AppContext.Provider>
    );
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
