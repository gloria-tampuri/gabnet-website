import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getProducts, getSubcategories } from '../../Helpers/queries'
import { slugify, unSlugify } from '../../Helpers/slugify'
import classes from '../../components/Category/CategoryPage.module.css'
import Layout from '../../components/Layout/Layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bounce from 'react-reveal/Bounce';
import Head from 'next/head'
import Image from 'next/image'
import { useOrderData } from '../../library/jotai-config/order'


const SubCategoriesPage = () => {
  const router = useRouter()
  const { category, subcategory } = router.query
  const [products, setProducts] = useState()
  const [productTitle, setProductTitle] = useState()
  const [loading, setLoading] = useState(true)

  const [orderData, setOrderData] = useOrderData();

  const notify = () => toast.success("Item added to cart", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
  });

  const handleAddToCart = (product) => {
    const productId = product.product.sys.id
    const productInCart = orderData.filter((order) => order.product.sys.id === productId);
    console.log(productInCart.length);
    if (productInCart.length > 0) {
      setOrderData(orderData.map((order) => {
        if (order.product.sys.id === productId) {
          return { ...order, quantity: order.quantity + 1 };
        }
        return order;
      }));
      return notify();
    } else {
      setOrderData([...orderData, { ...product, quantity: 1 }])
      return notify();
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const products = await getProducts()
        // let filter for the category we passed in our url
        const filteredCategory = products && products.filter((product) => (product.fields.category && slugify(product.fields.category) === category) && (product.fields.subCategory && slugify(product.fields.subCategory) === subcategory))
        setProducts(filteredCategory)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData();
  }, [category, subcategory])


  useEffect(() => {
    const productTitles = products && products.map((product) => product.fields.title).join()
    setProductTitle(productTitles)
  }, [products])


  return (
    <>
      <Head>
        <title> GABNET | {subcategory && String(subcategory.toUpperCase().replaceAll('-', ' '))} </title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name='description' content={productTitle && String(productTitle)} />
        <meta property='og:title' content={`More items on ${subcategory}`} />
        <meta name='description' content={subcategory} />
      </Head>
      <Layout>
        <div className={classes.categoryPage}>
          <div className={classes.pageHeader}>
            <h1>{subcategory && subcategory.toUpperCase().replaceAll('-', ' ')}</h1>
            <p className={classes.subtitle}>Discover our premium collection</p>
          </div>

          {loading ? (
            <div className={classes.loadingContainer}>
              <div className={classes.loadingSpinner}></div>
              <p>Loading products...</p>
            </div>
          ) : products && products.length > 0 ? (
            <div className={classes.griddy}>
              {products.map(product => (
                <div key={product.sys.id}>
                  <Bounce bottom duration={1500}>
                    <div className={classes.card}>
                      <div className={classes.imagediv}>
                        <Image 
                          height='400' 
                          width='400' 
                          src={'https:' + product.fields.image.fields.file.url} 
                          alt={product.fields.title}
                          className={classes.productImage}
                        />
                        <div className={classes.cardActions}>
                          <div className={classes.callNow}>
                            <p><a href="tel:+233595850394">Call now</a></p>
                          </div>
                          <button 
                            onClick={() => handleAddToCart({ product })} 
                            className={classes.cartBtn}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                      <div className={classes.productInfo}>
                        <h4>{product.fields.title}</h4>
                        <p>{product.fields.description}</p>
                      </div>
                    </div>
                  </Bounce>
                </div>
              ))}
            </div>
          ) : (
            <div className={classes.emptyState}>
              <div className={classes.emptyIcon}>📦</div>
              <h3>No products found</h3>
              <p>We couldn't find any products in this category. Please check back later.</p>
            </div>
          )}
        </div>
      </Layout>
      <ToastContainer />
    </>
  )
}

export default SubCategoriesPage
