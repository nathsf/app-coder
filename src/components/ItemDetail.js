import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";

const ItemDetail = () => {
const { id } = useParams()

const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
  }, [])
  
  const getProduct = async() => {
    const URL = 'https://fakestoreapi.com/products/' + id
    const response = await axios.get(URL)
    setProduct( response.data )
  }

  return (
    <div className="container">
        <div className="row mx-auto mt-5">
        { <Card className="col-8 mx-auto">
          
          <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{ product.title }</Card.Title>
        <Card.Text>
        { product.description }
        </Card.Text>
        <Card.Text>
        $ { product.price }
        </Card.Text>
        <Button variant="primary" >Añadir al carrito</Button>
      </Card.Body>
      </Card> }
        </div>
    </div>
  )
}
export default ItemDetail