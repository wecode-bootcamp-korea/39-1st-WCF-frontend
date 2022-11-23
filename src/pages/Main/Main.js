import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <Link to="/product-list?subCategoryId=1">
      <div>Main</div>
    </Link>
  );
}
