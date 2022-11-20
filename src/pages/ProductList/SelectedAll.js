import React from 'react';

export default function SelectedAll({ selectedFilter }) {
  return (
    <section className="selectedflter">
      <ul>
        {Object.keys(selectedFilter).map(selectedKey =>
          selectedFilter[selectedKey].map((selectedTab, idx) => {
            return <li key={idx}>{selectedTab}</li>;
          })
        )}
      </ul>
    </section>
  );
}
