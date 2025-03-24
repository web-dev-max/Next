export async function getProducts() {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          getAllProducts {
            id
            name
            image
            price
            amount
          }
        }
      `,
    }),
    cache: "force-cache",
  });

  const { data } = await res.json();
  return data.getAllProducts;
}

export async function getProduct(id: string) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query ($id: ID!) {
          getProductById(id: $id) {
            id
            name
            description
            price
            image
            amount
          }
        }
      `,
      variables: { id },
    }),
    cache: "force-cache",
  });

  const { data } = await res.json();
  return data?.getProductById || null;
}