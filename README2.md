
README2 feito por mim. Este readem tem os mesmo arquivos do swagger.json mas comentados para facilitar o entendimento.

===========
<!-- http://localhost:3000/paletas/api-docs/  link para acessar nosso projeto no brawser -->
===========

<!-- -->
{<!-- NOSSAS CONFIGURAÇ~ES BASICAS-->
  "openapi": "3.0.0", 
  "info": {
    "title": "API El Geladon",
    "description": "API para CRUD de paletas mexicanas e carrinho de compras",
    "termsOfService": "",
    "contact": {
      "email": "github.com/renatotl"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000/paletas",<!-- nossa aplicação local-->
      "description": "API de teste"
    },
    {
      "url": "https://api-elgeladon.herokuapp.com/paletas",<!-- nossa aplicação no heroku -->
      "description": "API de produção"
    }
  ],<!-- 1 PATH PARA CADA ROTA DO NOSSO PROJETO-->
  "paths": {
    "/all-paletas": {<!--rota 1 all-paleta. cuidado com o nome das rotas --> 
      "get": {<!--nossa rota all é um get -->
        "summary": "Lista de todas as paletas",
        "description": "Rota responsável por listar todas as paletas",
        "tags": ["Paletas"],<!--esta tag é a de paletas pois teremos duas models paletas e carrinho -->
        "responses": {
          "404": {<!--esta reposta corresponde a criada no findAllPaletasController -->
            "description": "Not Found"
          },
          "200": {<!-- nossa segunda resposta -->
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Paletas"<!-- $ref = reerencia-->
                  }
                }
              }
            }
          }
        }
      }
    },
    "/paleta/{id}": {
      "get": {
        "summary": "Busca uma paleta pelo ID",
        "description": "Rota responsável por buscar uma paleta pelo ID",
        "tags": ["Paletas"],
        "parameters": [
          {
            "name": "id",
            "in": "path",<!-- vem pelo path minha rota-->
            "description": "Id da paleta para a busca",
            "required": true
          }
        ],
        "responses": {
          "400": {
            "description": "Bad Request"
          },
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",<!-- já que ele retorna uma paleta o type é object -->
                  "$ref": "#/components/schemas/Paletas"<!-- termos direto as referencias -->
                }
              }
            }
          }
        }
      }
    },
    "/create-paleta": {
      "post": {
        "summary": "Cadastrar uma paleta",
        "description": "Rota responsável por cadastrar uma paleta",
        "tags": ["Paletas"],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Paletas"
              },
              "examples": {
                "Paletas": {
                  "value": {
                    "sabor": "Maracuja",<!-- foi colocado valores pré-determinados quando fomos crair alguma paleta -->
                    "descricao": "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
                    "foto": "./assets/images/maracuja.png",
                    "preco": 4
                  }
                }
              }
            }
          }
        },
        "responses": {
          "400": {
            "description": "Bad Request"
          },
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "$ref": "#/components/schemas/Paletas"
                }
              }
            }
          }
        }
      }
    },
    "/update-paleta/{id}": {
      "put": {
        "summary": "Editar uma paleta pelo ID",
        "description": "Rota responsável por editar uma paleta pelo ID",
        "tags": ["Paletas"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id da paleta para a busca",
            "required": true
          }
        ],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Paletas"
              },
              "examples": {
                "Paletas": {
                  "value": {
                    "sabor": "Limão Editado",
                    "descricao": "Quam vulputate dignissim suspendisse in est ante in nibh mauris.",
                    "foto": "./assets/images/limao.png",
                    "preco": 7
                  }
                }
              }
            }
          }
        },
        "responses": {
          "400": {
            "description": "Bad Request"
          },
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "$ref": "#/components/schemas/Paletas"
                }
              }
            }
          }
        }
      }
    },
    "/delete-paleta/{id}": {
      "delete": {
        "summary": "Apagar uma paleta pelo ID",
        "description": "Rota responsável por apagar uma paleta pelo ID",
        "tags": ["Paletas"],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Id da paleta para deleção",
            "required": true
          }
        ],
        "responses": {
          "400": {
            "description": "Bad Request"
          },
          "200": {
            "description": "OK"
          }
        }
      }
    },<!-- Nosso CRUD de Carrinho-->
    "/all-carrinho": {<!-- vamos configurar nosso caminho de Carrinho -->
      "get": {
        "summary": "Lista de todos os itens do carrinho",
        "description": "Rota responsável por listar todos os itens do carrinho",
        "tags": ["Carrinho"],
        "responses": {
          "404": {
            "description": "Not Found"
          },
          "200": {
            "description": "OK",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Carrinho"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/create-carrinho": {
      "post": {
        "summary": "Cadastrar vários itens no carrinho",
        "description": "Rota responsável por cadastrar vários itens no carrinho",
        "tags": ["Carrinho"],
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Carrinho"
              },
              "examples": {
                "Carrinho": {
                  "value": [
                    {
                      "paletaId": "624230fdcd38269205c82197",
                      "quantidade": 5
                    },
                    {
                      "paletaId": "62d4514ed93e47c65a00b966",
                      "quantidade": 2
                    }
                  ]
                }
              }
            }
          }
        },
        "responses": {
          "400": {
            "description": "Bad Request"<!-- cria meu arrey -->
          },
          "201": {
            "description": "Created",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/Carrinho"
                  }
                }
              }
            }
          }
        }
      }
    },
    "/finish-carrinho": {
        "delete": {
          "summary": "Apagar todos os itens do carrinho",
          "description": "Rota responsável por apagar todos os itens do carrinho",
          "tags": ["Carrinho"],
          "responses": {
            "400": {
              "description": "Bad Request"
            },
            "200": {
              "description": "OK"
            }
          }
        }
      }
  },
  "components": {<!--é um objeto -->
    "schemas": {
      "Paletas": {
        "type": "object",
        "properties": {<!-- os campos do nosso banco, sabor, descricao etc -->
          "sabor": {
            "type": "string"
          },
          "descricao": {
            "type": "string"
          },
          "foto": {
            "type": "string"
          },
          "preco": {
            "type": "number"
          }
        }
      },
      "Carrinho": {<!-- carrinho també é uma model -->
        "type": "object",
        "properties": {
          "paletaId": {
            "type": "string"
          },
          "quantidade": {
            "type": "number"
          }
        }
      }
    }
  }
}
