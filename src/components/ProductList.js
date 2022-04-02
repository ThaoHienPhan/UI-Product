import React from 'react';
import { Link } from 'react-router-dom';
import{
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'
export const ProductList = () => {
    return (
        <ListGroup className='container table table-striped'>
            <h2>Products</h2>
        <ListGroupItem>
        <table class="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Product1</td>
                <td>abc</td>
                <td>abc</td>
                <td><Link className='btn btn-warning  ' to = "./edit/1">Edit</Link></td>
                <td><Button className='btn btn-danger ml-auto'>Delete</Button></td>
                </tr>
                <tr>
                <td>Product1</td>
                <td>abc</td>
                <td>abc</td>
                <td><Link className='btn btn-warning  ' to = "./edit/1">Edit</Link></td>
                <td><Button className='btn btn-danger ml-auto'>Delete</Button></td>
                </tr>
            </tbody>
        </table>
        </ListGroupItem>
        </ListGroup>
    )
}