CREATE TABLE "public"."Category"(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE "public"."Product"(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  code VARCHAR(255) UNIQUE NOT NULL,
  quantity INTEGER NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  "categoryId" INTEGER NOT NULL,
  FOREIGN KEY ("categoryId") REFERENCES "public"."Category"(id)
);

INSERT INTO "public"."Category" (name) VALUES
('Eletrodoméstico'),
('Automovel'),
('Saúde'),
('Esportes'),
('Tecnologia');


INSERT INTO "public"."Product" (name, code, quantity, is_active, "categoryId") VALUES
('Suplemento', 'cfb17dda-8019-4017-b02a-0a8b841f85ed', 16, true, 4),
('Microondas', '42d338b3-176a-4ee1-a7d7-ae4e65c29138', 56, true, 1),
('Computador', '53bbef26-02fe-4a02-9485-78d7d7494863', 27, true, 5),
('Bola', '22c6bd3e-4584-4d01-bf7a-0fd66651988c', 38, true, 4),
('Notebook', '11d4ce43-4a97-4164-bd6d-6a42639d8e3f', 25, true, 5),
('Uno', '5a931bbb-5809-4954-aea5-100e7aa7f5ef', 7, true, 2),
('Termometro', '3b30531d-c072-45d4-9471-2ba91e627a94', 22, true, 3),
('Fusca', '6736c1b8-24ee-4512-b582-a198c8267cf6', 12, true, 2),
('Máscara', 'd7fa2dfe-644a-40c3-a353-40abde002f41', 19, true, 3),
('Nebulizador', '78a8a996-be12-439b-998d-ad2bed9c7f54', 17, true, 3),
('Bicicleta', '6fc32242-992e-4bf5-977d-10134638c76d', 31, true, 4),
('Balança', '5714ae73-baaa-426a-a0da-596ccd1f035b', 20, true, 3),
('Skate', 'ebc858e0-2e9f-4d36-93ed-e77b20aac122', 13, true, 4),
('Ventilador', 'c48fdd51-bd5f-4fca-ad9d-9cf45be3365c', 9, true, 1),
('Celular', 'bde97968-46bf-4c11-b401-2ed77126ad9a', 7, true, 5),
('Palio', 'bff8798d-c46c-41ee-b214-741f9affa681', 14, true, 2),
('Camera', '4aca4a49-031e-428a-93fa-095ab8039bb8', 65, true, 5),
('Celta', 'ce5d3503-08b9-4aaf-8b94-ef5a302ea8f8', 23, true, 2),
('Liquidificador', '16f81364-e498-44fb-b880-519b21a1270e', 4, true, 1);