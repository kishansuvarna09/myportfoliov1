function IndexPage() {
  return <></>;
}

export async function getServerSideProps({ res }) {
  res.writeHead(307, { Location: '/portfolio' });
  res.end();
  return { props: {} };
}

export default IndexPage;
