async function fetchAPI(query: any, { variables }: { variables: any }) {
  const res = await fetch(
    'https://api-eu-west-2.hygraph.com/v2/cls7zdnlr15hm01w4ag3iicxq/master',
    {
      method: 'POST',
      body: JSON.stringify({
        query,
        variables,
      }),
    }
  );
  const json = await res.json();

  if (json) {
    return json;
  } else if (!json) {
    throw new Error('Failed to fetch API: ' + json);
  }
}
