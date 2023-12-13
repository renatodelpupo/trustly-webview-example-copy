export const exposeEnvVariables = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);

  window.env = {
    ACCESS_ID:
      (process.env && process.env.REACT_APP_TRUSTLY_ACCESS_ID) ||
      urlSearchParams.get('accessId'),
    MERCHANT_ID:
      (process.env && process.env.REACT_APP_TRUSTLY_MERCHANT_ID) ||
      urlSearchParams.get('merchantId'),
    SERVER_URL:
      (process.env && process.env.REACT_APP_TRUSTLY_SERVER_URL) ||
      urlSearchParams.get('serverUrl'),
    SUBDOMAIN:
      (process.env &&
        process.env.REACT_APP_TRUSTLY_SUBDOMAIN &&
        `${process.env.REACT_APP_TRUSTLY_SUBDOMAIN}.`) ||
      (urlSearchParams.get('subdomain') &&
        `${urlSearchParams.get('subdomain')}.`) ||
      '',
  };
};

export const loadScript = (callback) => {
  const { ACCESS_ID, SUBDOMAIN } = window.env;
  const sdkScript = document.createElement('script');
  sdkScript.type = 'text/javascript';
  sdkScript.src = `https://${SUBDOMAIN}trustly.one/start/scripts/trustly.js?accessId=${ACCESS_ID}`;
  sdkScript.onload = callback;
  document.head.appendChild(sdkScript);
};

const sdk = {
  exposeEnvVariables,
  loadScript,
};

export default sdk;
