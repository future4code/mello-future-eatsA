import styled from 'styled-components';

export const View = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0;
  font-size: 16px;
  color: #b8b8b8;
  p {
    margin: 0;
    margin-top: 8px;
    padding: 0;
    margin-left: 16px;
  }
`;

export const PropertyDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  margin-top: 16px;
  margin-bottom: 16px;
  padding: 0;
  font-size: 16px;
  color: #b8b8b8;
  p {
    margin: 0;
    margin-top: 8px;
    padding: 0;
    margin-left: 16px;
  }
`;

export const SubTitlePropertyDetails = styled.p`
  color: #5cb646;
  margin-top: 16px;
  margin-bottom: 16px;
`;
export const Price = styled.span`
  margin: 0;
  padding: 0;
  margin-left: 256px;
  margin-right: 16px;
  margin-top: -21px;
  color: #5cb646;
  font-size: 18px;
`;

export const SubTitle = styled.span`
  margin: 0;
  color: #000;
  font-size: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;
export const Portage = styled.div`
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
  margin-left: 243px;
  color: #000;
`;

export const TitleMethod = styled.div`
  padding-top: 25px;
  margin-bottom: 400px;
  margin: 0;
  margin-left: 16px;
`;

export const MethodPayment = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.4);
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  margin-right: 16px;
  input {
    width: 0;
    height: 0;
    margin-top: 8px;
    margin-right: 8px;
  }
  button {
    margin-top: 30px;
  }
`;
export const Options = styled.label`
  margin-top: 4px;
  margin-bottom: 4px;
  font-size: 16px;
  color: #000;
  width: 160px;
  p {
    margin: 0;
  }
`;
