import React from 'react';
import faker from 'faker';
import { FixedSizeList as List } from 'react-window';
import './App.css';


function App() {
  const data = new Array(10000).fill().map((value, id) => ({
    id,
    title: faker.lorem.words(5),
    body: faker.lorem.sentences(8)
  }))

  const Row = ({ index, key, style }) => (
    <div>
      <div key={key} style={style} className="post">
        <h3>{`${data[index].title}-${data[index].id}`}</h3>
        <p>{data[index].body}</p>
      </div>
    </div>
  )

  return (
    <List 
      width={1400}
      height={700}
      itemCount={data.length}
      itemSize={120}
    >
      {Row}
    </List>
  );
}

export default App;
