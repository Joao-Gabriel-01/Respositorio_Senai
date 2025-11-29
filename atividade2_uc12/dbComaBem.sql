CREATE DATABASE ComaBem;
GO

USE ComaBem;
GO

CREATE TABLE Restaurante (
    id_restaurante INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    geolocalizacao_lat DECIMAL(10, 8), 
    geolocalizacao_long DECIMAL(11, 8), 
    tipo_culinaria VARCHAR(50)
);
GO


CREATE TABLE Prato (
    id_prato INT IDENTITY(1,1) PRIMARY KEY,
    nome_prato VARCHAR(100) NOT NULL,
    foto_prato VARCHAR(255), 
    ranking INT, 
    recomendacoes VARCHAR(MAX), 
    id_restaurante INT,
    FOREIGN KEY (id_restaurante) REFERENCES Restaurante(id_restaurante)
);


INSERT INTO Restaurante (nome, geolocalizacao_lat, geolocalizacao_long, tipo_culinaria) 
VALUES ('Cantina Italiana', -23.550520, -46.633308, 'Italiana');
GO


INSERT INTO Prato (nome_prato, foto_prato, ranking, recomendacoes, id_restaurante) 
VALUES 
('Lasanha à Bolonhesa', '/img/lasanha.jpg', 5, 'Melhor prato da casa, serve 2 pessoas', 1),
('Spaghetti Carbonara', '/img/carbonara.jpg', 4, 'Acompanha queijo parmesão extra', 1);
GO

-- Listar pratos e restaurantes (Inner Join)
SELECT 
    p.nome_prato, 
    p.ranking, 
    p.recomendacoes, 
    r.nome AS nome_restaurante, 
    r.tipo_culinaria
FROM Prato p
INNER JOIN Restaurante r ON p.id_restaurante = r.id_restaurante;
GO

-- Atualizar ranking
UPDATE Prato 
SET ranking = 4 
WHERE id_prato = 1;
GO

-- Atualizar nome do restaurante
UPDATE Restaurante 
SET nome = 'Coma Bem' 
WHERE id_restaurante = 1;
GO

-- PERFIL 1: ADMIN (Gerente) 

-- Criar o LOGIN no servidor (autenticação)
CREATE LOGIN [admin_comabem] WITH PASSWORD = 'SenhaForte@123';
GO

-- Criar o USUÁRIO no banco de dados mapeado para o login
CREATE USER [admin_comabem] FOR LOGIN [admin_comabem];
GO

-- Conceder permissão total (role db_owner é comum para admins de DB)
ALTER ROLE db_owner ADD MEMBER [admin_comabem];
GO

-- PERFIL 2: CLIENTE (Apenas Leitura) 

-- Criar o LOGIN
CREATE LOGIN [cliente_app] WITH PASSWORD = 'SenhaCliente@123';
GO

-- Criar o USUÁRIO no banco
CREATE USER [cliente_app] FOR LOGIN [cliente_app];
GO

-- Conceder permissões restritas
-- A role db_datareader permite SELECT em todas as tabelas
ALTER ROLE db_datareader ADD MEMBER [cliente_app];
GO