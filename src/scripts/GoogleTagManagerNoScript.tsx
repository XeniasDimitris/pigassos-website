export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}`}
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
      ></iframe>
    </noscript>
  );
}
