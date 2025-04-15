use('BD3-NoSQL-AtlasMongoDB');

db['bd3-nosql-atv2'].updateMany(
  {'cod_aluno':'A001'},
  {$set:{"cod_turma": "T9",
         "nome": "João Silva Cunha",
         "cpf": "123.456.987-01",
         "rg": "12.346.123-9",
         "telefone_aluno": "(21) 98798-4321",
         "telefone_responsavel": "(21) 92125-6789",
         "email": "pedro.silvacunha@gmail.com",
         "data_nascimento": "1999-11-15"}}
)