import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 360px;
  height: 640px;
  overflow: auto;
  input {
    padding-left: 56.3px;
  }
`;

export const Filters = styled.div`
  max-width: 360px;
  width: 100%;
  margin-top: -13px;
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  overflow: auto;
`;

export const NoResultsText = styled.div`
  text-align: center;
  margin: 20px;
`;

export const Search = styled.div`
  margin: 16px;
`;

export const SearchIcon = styled.span`
  padding: 0;
  display: flex;
  flex-direction: row;
  top: 40px;
  left: 33px;
  color: #13abe1;
  position: absolute;
`;

export const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  padding-top: 8px;
  background-color: white;
`;

export const Categories = styled.span`
  margin-left: 16px;
  padding: 16px;
  cursor: pointer;
  :focus {
    color: ${({ sameCategory }) => (sameCategory ? 'black' : '#5cb646')};
  }
`
