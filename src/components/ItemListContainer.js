import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts()
  }, [])
  
  const getProducts = async() => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  }

  return (
    <div className="container mt-4">
        <h1 >Store Products</h1>
        <div className="row">
        
        { products?.map( p => <div className="col-4"> <Card key={p.id}>
          
          <Card.Img variant="top" src={p.image} />
      <Card.Body>
        <Card.Title>{ p.title }</Card.Title>
        <Card.Text>
        $ { p.price }
        </Card.Text>
        <Button variant="primary" className="text-white"><Link  className="text-white" to={`/products/${p.category}/${p.id}`}>
          Detalle
      </Link></Button>
      </Card.Body>
      </Card> </div>) }
        
        </div>
    </div>
  )
}
export default ItemListContainer