import { useEffect, useState } from 'react';
import HeaderBar from './HeaderBar';
import PayCard from './PayCard';
import SelectBankCard from './SelectBankCard';
import { exposeEnvVariables, loadScript } from './utils/sdk';

const params = new URLSearchParams(window.location.search);

function App() {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    exposeEnvVariables();
    loadScript(() => {
      setSdkLoaded(true);
    });
  }, []);

  const TrustlyOptions = {
    closeButton: false,
    dragAndDrop: true,
    widgetContainerId: 'widget',
  };

  const returnEstablishData = () => {
    const { ACCESS_ID, MERCHANT_ID, SERVER_URL } = window.env;
    const lightboxRedirectURL = SERVER_URL || '#';

    let data = {
      accessId: ACCESS_ID,
      // requestSignature: REQUEST_SIGNATURE,
      merchantId: MERCHANT_ID,
      description: 'transaction description',
      merchantReference: 'merchant reference',
      currency: 'USD',
      paymentType: 'Deferred',
      returnUrl: `${lightboxRedirectURL}/return`,
      cancelUrl: `${lightboxRedirectURL}/cancel`,
      metadata: {},
    };
    // check query params for mobile
    if (params.get('integrationContext') && params.get('urlScheme')) {
      if (!data.metadata) data.metadata = {};
      data.metadata.urlScheme = `${params.get('urlScheme')}://`;
      data.metadata.integrationContext = params.get('integrationContext');
    }
    return data;
  };

  return (
    <div className='App'>
      {sdkLoaded && (
        <>
          <HeaderBar />
          <SelectBankCard
            establishData={returnEstablishData}
            TrustlyOptions={TrustlyOptions}
          ></SelectBankCard>
          <PayCard
            establishData={returnEstablishData}
            TrustlyOptions={TrustlyOptions}
          ></PayCard>
        </>
      )}
    </div>
  );
}

export default App;
