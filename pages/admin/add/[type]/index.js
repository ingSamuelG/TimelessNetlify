import React from 'react'
import Typography from '@mui/material/Typography';
import HeadTag from '../../../../components/HeadTag';
import { useGlobalContext } from "../../../../context";
import styles from '../../../../styles/Add.module.css';
import AddColorForm from '../../../../components/AddColorForm';
import AddSizeForm from '../../../../components/AddSizeForm';
import AddBrandFrom from '../../../../components/AddBrandFrom';
import AddCategoriesFrom from '../../../../components/AddCategoriesFrom';
import AddSubCatForm from '../../../../components/AddSubCatForm';
import AddProductForm from '../../../../components/AddProductForm';
import { useRouter } from 'next/router';


const Index = () => {
    const { adminSideBarOpen } = useGlobalContext()

    const router = useRouter()
    const { type } = router.query


    if (type == 'color') {
        return (<>
            <HeadTag
                title={"Añadir un color nuevo"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddColorForm />
            </div>
        </>
        )
    }

    if (type == 'marca') {
        return (<>
            <HeadTag
                title={"Añadir una marca nueva"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddBrandFrom />
            </div>
        </>
        )
    }

    if (type == 'categoria') {
        return (<>
            <HeadTag
                title={"Añadir una categoria nueva"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddCategoriesFrom />
            </div>
        </>)
    }

    if (type == 'talla') {
        return (<>
            <HeadTag
                title={"Añadir una talla nueva"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddSizeForm />
            </div>
        </>
        )
    }

    if (type == 'subcategoria') {
        return (<>
            <HeadTag
                title={"Añadir una subcategoria nueva"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddSubCatForm />
            </div>
        </>
        )
    }

    if (type == 'producto') {
        return (<>
            <HeadTag
                title={"Añadir un producto nuevo"}
                robotContent={["noindex", "nofollow"]}
            />
            <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>
                <AddProductForm />
            </div>
        </>
        )
    }



    return <div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}><Typography variant="h2" gutterBottom component="div">
        Nada que añadir
    </Typography></div>
}

Index.layout = 'admin'

export default Index
