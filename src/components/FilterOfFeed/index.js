import React from 'react';
import styled from 'styled-components'

const Filters = styled.div`
  max-width: 360px;
  width: 100%;
  height: 42px;
  margin-top: 22px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  overflow: auto;

  span {
    margin-left: 16px;
    padding: 16px;
  }
`

function FilterOfFeed({category}) {

  return <Filters>
    {category.map((item) => (
      <span key={item.id}>{item.category}</span>
    ))}
  </Filters>
}

export default FilterOfFeed;