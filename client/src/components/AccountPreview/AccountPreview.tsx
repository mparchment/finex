import { AccountPreviewBox, AccountPreviewTop, AccountPreviewBottom, AccountPreviewName, AccountPreviewType, AccountPreviewNumber, AccountPreviewBalance } from "./AccountPreview.styles"

interface AccountPreviewProps {
  name: string;
  type: string;
  number: string;
  balance: number;
  onClick: () => void;
}

export default function AccountPreview(props: AccountPreviewProps){
    const formattedBalance = props.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return (
        <AccountPreviewBox onClick={props.onClick}>
            <AccountPreviewTop>
                <AccountPreviewName>{props.name}</AccountPreviewName>
                <AccountPreviewType>{props.type}</AccountPreviewType>
                <AccountPreviewNumber>{props.number}</AccountPreviewNumber>
            </AccountPreviewTop>
            <AccountPreviewBottom>
                <AccountPreviewBalance>{formattedBalance}</AccountPreviewBalance>
            </AccountPreviewBottom>
        </AccountPreviewBox>
    )
}