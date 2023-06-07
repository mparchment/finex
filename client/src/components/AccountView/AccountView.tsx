import { Account } from '../../types';
import { Container, Title, Balance } from './AccountView.styles';

interface Props {
  account: Account;
}

export default function AccountView({ account }: Props) {
  return (
    <Container style={{ flex: 1 }}>
    <Title>{account.name}</Title>
    <p>{account.type} Account</p>
    <p>Account Number: {account.number}</p>
    <Balance>${account.balance.toFixed(2)}</Balance>
    </Container>
  );
}