CREATE TABLE public.products (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  name text,
  description text,
  image_url text,
  price numeric,
  stock numeric,
  CONSTRAINT products_pkey PRIMARY KEY (id)
);
