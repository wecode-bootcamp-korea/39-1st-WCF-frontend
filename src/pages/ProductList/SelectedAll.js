import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SelectedAll({ selectedFilter }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const entries = searchParams.entries();

  return (
    <section className="selectedflter">
      <ul>
        {entries.map(params =>
          searchParams.getAll(params).map((param, idx) => {
            return <li key={idx}>{param}</li>;
          })
        )}
      </ul>
    </section>
  );
}
