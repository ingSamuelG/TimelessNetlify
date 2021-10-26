
export const reducer = (state, action) => {

    if (action.type === "SET-CATEGORIES") {
        console.log(action.payload);
        return {
            ...state,
            categories: action.payload,
        };
    }

    if (action.type == 'TOGGLE_SIDE') {
        return {
            ...state,
            sideBarOpen: !state.sideBarOpen
        }
    }

    if (action.type == 'TOGGLE_SIDE_ADMIN') {
        return {
            ...state,
            adminSideBarOpen: !state.adminSideBarOpen
        }
    }

    if (action.type == 'SET-FILTER-SIDE-OPEN') {
        return {
            ...state,
            filterSideBarOpen: action.payload
        }
    }

    if (action.type == 'SET-COLOR-FILTER') {
        return {
            ...state,
            colorFilter: action.payload
        }
    }

    if (action.type == 'SET-BRAND-FILTER') {
        return {
            ...state,
            brandFilter: action.payload
        }
    }




    if (action.type == 'SET-CATEGORY-FILTER') {
        return {
            ...state,
            categoryFilter: action.payload
        }
    }


    if (action.type == 'SET-SIZE-FILTER') {
        return {
            ...state,
            sizeFilter: action.payload
        }
    }

    if (action.type == 'SET-COLOR-PRESSED') {
        return {
            ...state,
            colorPressed: action.payload
        }
    }

    if (action.type == 'SET-CATEGORY-PRESSED') {
        return {
            ...state,
            categoriesPressed: action.payload
        }
    }

    if (action.type == 'SET-SUBCATEGORY-PRESSED') {
        return {
            ...state,
            subCategoriesPressed: action.payload
        }
    }

    if (action.type == 'SET-MY-ADDRESSES') {
        const newArray = [...state.myAddresses, action.payload]
        return {
            ...state,
            myAddresses: newArray
        }
    }

    if (action.type == 'SET-MY-DEFAULT-ADDRESSES') {
        return {
            ...state,
            myDefaultAddress: action.payload
        }
    }

    if (action.type == 'SET-SIZE-PRESSED') {
        return {
            ...state,
            sizePressed: action.payload
        }
    }

    if (action.type == 'ADD_CART') {
        return {
            ...state,
            myCart: action.payload
        }
    }

    if (action.type == 'ADD_LIKES') {
        return {
            ...state,
            myLikes: action.payload
        }
    }

    if (action.type == 'SET-BRAND-PRESSED') {
        return {
            ...state,
            brandPressed: action.payload
        }
    }

    if (action.type == 'SET-CART-COUNT') {
        return {
            ...state,
            cartCount: action.payload
        }
    }



    if (action.type == 'TOGGLE_SEARCH') {
        return {
            ...state,
            searching: action.payload
        }
    }

    if (action.type == 'SET_SUBMENU_OPEN') {
        return {
            ...state,
            subMenuOpen: true
        }
    }

    if (action.type == 'SET_SUBMENU_CLOSE') {
        return {
            ...state,
            subMenuOpen: false
        }
    }

    if (action.type == 'SET_SUBMENU_LOCATION') {
        return {
            ...state,
            subMenuLocation: action.payload
        }
    }

    if (action.type == 'SET_CURRENT_CATEGORY') {
        return {
            ...state,
            currentCategory: action.payload
        }
    }

    if (action.type == 'SET_PRODUCT_FILTER') {
        return {
            ...state,
            productsFilter: action.payload
        }
    }

    if (action.type == 'SET_SELECTED_SIZE') {
        return {
            ...state,
            sizeSelected: action.payload
        }
    }

    if (action.type == 'SET_SELECTED_QTY') {
        return {
            ...state,
            qtySelected: action.payload
        }
    }

    if (action.type == 'TOGGLE-TRACKING') {
        return {
            ...state,
            traking: !state.traking
        }
    }

    if (action.type == 'SET-NEW-STATE-ORDER') {
        return {
            ...state,
            newOrderState: action.payload
        }
    }

    if (action.type == 'TOGGLE-EDIT-FACT') {
        return {
            ...state,
            editOrderFact: !state.editOrderFact
        }
    }

    if (action.type == 'TOGGLE-EDIT-ENV') {
        return {
            ...state,
            editOrderShip: !state.editOrderShip
        }
    }



    throw new Error("No entro una accion valida");
};