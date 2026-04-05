CREATE TABLE public.logs_pedidos (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  user text,
  product_id numeric,
  CONSTRAINT logs_pedidos_pkey PRIMARY KEY (id)
);