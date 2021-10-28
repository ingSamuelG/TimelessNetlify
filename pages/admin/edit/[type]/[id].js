import React from 'react'
import Typography from '@mui/material/Typography';
import { useGlobalContext } from "../../../../context";
import styles from '../../../../styles/Add.module.css';
import AddColorForm from '../../../../components/AddColorForm';
import AddSizeForm from '../../../../components/AddSizeForm';
import AddBrandFrom from '../../../../components/AddBrandFrom';
import HeadTag from '../../../../components/HeadTag';
import AddCategoriesFrom from '../../../../components/AddCategoriesFrom';
import AddSubCatForm from '../../../../components/AddSubCatForm';
import AddProductForm from '../../../../components/AddProductForm';
import { data } from '../../../../PublicData'
import { useRouter } from 'next/router';


const Index = ({ edit_object }) => {
    const { adminSideBarOpen } = useGlobalContext()

    const router = useRouter()
    const { type, id } = router.query

    if (type == 'color') {
        return (<>
            <HeadTag
                title={`Editando el color: ${edit_object.name}`}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddColorForm color={edit_object} />
            </div>
        </>
        )
    }

    if (type == 'marca') {
        return (<>
            <HeadTag
                title={`Editando Marca: ${edit_object.name}`}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddBrandFrom brand={edit_object} />
            </div>
        </>
        )
    }

    if (type == 'categoria') {
        return (<>
            <HeadTag
                title={`Editando Categoria: ${edit_object.name}`}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddCategoriesFrom category={edit_object} />
            </div>
        </>
        )
    }

    if (type == 'talla') {
        return (<>
            <HeadTag
                title={`Editando talla: ${edit_object.name}`}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddSizeForm size={edit_object} />
            </div>
        </>
        )
    }

    if (type == 'subcategoria') {
        return (
            <>
                <HeadTag
                    title={`Editando subcategoria: ${edit_object.name}`}
                    robotContent={["noindex", "nofollow"]}
                />
                <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                    <AddSubCatForm subcategory={edit_object} />
                </div>
            </>
        )
    }

    if (type == 'producto') {
        return (<>
            <HeadTag
                title={`Editando producto: ${edit_object.short_description}`}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddProductForm product={edit_object} />
            </div>
        </>
        )
    }



    return <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}><Typography variant="h2" gutterBottom component="div">
        Nada que añadir
    </Typography></div>
}

export async function getServerSideProps(context) {
    let edit_object = {}
    if (context.params.type == "producto") {
        edit_object = data.products.find(product => product.id == context.params.id)
    }

    if (context.params.type == "color") {
        edit_object = data.colors.find(color => color.id == context.params.id)
    }

    if (context.params.type == "talla") {
        edit_object = data.sizes.find(size => size.id == context.params.id)
    }

    if (context.params.type == "marca") {
        edit_object = data.brands.find(brand => brand.id == context.params.id)
    }

    if (context.params.type == "categoria") {
        edit_object = data.categories.find(cat => cat.id == context.params.id)
    }

    if (context.params.type == "subcategoria") {
        edit_object = data.subcategories.find(subcat => subcat.id == context.params.id)
    }


    return {
        props: {
            edit_object,
        }, // will be passed to the page component as props
    }
}

// this code is only for front end testing propuse we shuld get the product from a api or fetch

// export const getStaticProps = async (context) => {
//     if (context.params.type == "producto") {
//         const edit_object = data.products.find((product) => product.id === context.params.id)
//         return {
//             props: {
//                 edit_object,
//             },
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const ids = data.products.map(product => product.id)

//     const types = ["producto", "color", "talla", "marca", "categoria", "subcategoria"]

//     // let paths = ids.map((id => ({ params: { id: id.toString() } })))

//     paths = []

//     types.forEach((type) => { paths.push({ params: { type: type.toString() } }) })

//     console.log(paths)

//     return { paths, fallback: false }


// }


Index.layout = 'admin'

export default Index
