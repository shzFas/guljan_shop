import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import LoadingBox from '../components/LoadingBox'
import MessageBox from '../components/MessageBox'
import ProductItem from '../components/ProductItem'
import { useGetProductCategoryQuery } from '../hooks/productHooks'
import { ApiError } from '../types/ApiError'
import { getError } from '../utils'
import { useLocation } from 'react-router-dom'

export default function SearchPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const { data: products, isLoading, error } = useGetProductCategoryQuery(category);

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <>
      <Helmet>
        <title>Guljan - {category ? category : 'Products'}</title>
      </Helmet>
      {products?.length === 0 ? (
        <MessageBox variant="info">No products found in this category.</MessageBox>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col className="products__main" key={product.slug} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
}
