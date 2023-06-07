import styled from 'styled-components';

const AccountPreviewBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 250px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.2s ease-in-out;
  border: 2px solid rgba(0, 0, 0, 0.1);

  cursor: pointer;
  user-select: none;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const AccountPreviewTop = styled.div`
  padding-top: 16px;
  color: white;
  background-color: rgb(37, 150, 190);
  border-radius: 8px 8px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
`;

const AccountPreviewBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background-color: white;
  border-radius: 0px 0px 8px 8px;
`;

const AccountPreviewName = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
`;

const AccountPreviewType = styled.p`
  font-size: 14px;
  color: white;
  margin-top: 5px;
  font-family: 'Open Sans', sans-serif;
`;

const AccountPreviewNumber = styled.p`
  font-size: 14px;
  color: white;
  font-family: 'Open Sans', sans-serif;
`;

const AccountPreviewBalance = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
`;

export {
    AccountPreviewBox,
    AccountPreviewTop,
    AccountPreviewBottom,
    AccountPreviewName,
    AccountPreviewType,
    AccountPreviewNumber,
    AccountPreviewBalance
}