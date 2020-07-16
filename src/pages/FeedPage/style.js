import styled from 'styled-components'

export const AppContainer = styled.div`
  input {
    padding-left: 56.3px;
  }
`

export const Filters = styled.div`
  max-width: 360px;
  width: 100%;
  margin-top: 22px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  overflow: auto;
  span {
    margin-left: 16px;
    padding: 16px;
    cursor: pointer;
    :focus {
      color: ${({same}) => (same ? 'black' : '#5cb646')};
    }
  }
`
export const NoResultsText = styled.div`
  text-align: center;
  margin: 20px;
`

export const Search = styled.div`
  margin: 16px;
`

export const SearchIcon = styled.span`
  margin-top: -40px;
  margin-left: 17px;
  padding: 0;
  display: flex;
  flex-direction: row;
  top: 1px;
  color: #13abe1;
  position: relative;
  left: 0px;
`;