import { useState } from 'react';
import { Flexbox } from './Accounts.styles';
import AccountPreview from '../../components/AccountPreview/AccountPreview';
import AccountView from '../../components/AccountView/AccountView';

export default function Accounts() {
  const accounts = [
    { name: "Checking Account", type: "Checking", number: "132631525", balance: 10817.32 },
    { name: "Emergency Fund", type: "Savings", number: "987654323", balance: 25392.15 },
    { name: "OSI Account", type: "Checking", number: "246810121", balance: 1903.01 },
  ];

  const [selectedAccount, setSelectedAccount] = useState(null);

  const handleAccountClick = (account: any) => {
    setSelectedAccount(account);
  }

  return (
    <>
      {selectedAccount ? (
        <AccountView account={selectedAccount} />
      ) : (
        <Flexbox>
          {accounts.map((account, index) => (
            <AccountPreview 
              key={index}
              name={account.name} 
              type={account.type} 
              number={account.number} 
              balance={account.balance}
              onClick={() => handleAccountClick(account)}
            />
          ))}
        </Flexbox>
      )}
    </>
  );
}