CREATE TABLE public.profiles (
  name character varying,
  user_id uuid,
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  user_email character varying,
  user_photo text,
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);