import React from 'react';
import { Link, useParams } from 'react-router-dom';
export default function ProductList() {
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <Link to="/product-list/1">1. link</Link>
    </div>
  );
}
