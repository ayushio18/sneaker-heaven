import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
  json,
  redirect,
} from "react-router-dom";

import classes from "./ProductForm.module.css";

function ProductForm({ method, product }) {
  const data = useActionData();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <p>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          required
          defaultValue={product ? product.name : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={product ? product.description : ""}
        />
      </p>
      <p>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          name="price"
          required
          defaultValue={product ? product.price : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={product ? product.image : ""}
        />
      </p>
      <p>
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          defaultValue={product ? product.category : ""}
        />
      </p>
      <p>
        <label htmlFor="subcategory">Subcategory</label>
        <input
          id="subcategory"
          type="text"
          name="subcategory"
          required
          defaultValue={product ? product.subcategory : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={product ? product.date : ""}
        />
      </p>
      <p>
        <label htmlFor="bestseller">Bestseller</label>
        <input
          id="bestseller"
          type="text"
          name="bestseller"
          required
          defaultValue={product ? product.bestseller : ""}
        />
      </p>

      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default ProductForm;

export async function action({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const productData = {
    title: data.get("name"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
    price: Number(data.get("price")),
    category: data.get("category"),
    subCategory: data.get("subCategory"),
    sizes: data.getAll("sizes"),
    bestseller: data.get("bestseller") === "true",
  };
  let url = "http://localhost:8080/products";

  if (method === "PATCH") {
    const productId = params.productId;
    url = "http://localhost:8080/products/" + productId;
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save product." }, { status: 500 });
  }

  return redirect("/products");
}
