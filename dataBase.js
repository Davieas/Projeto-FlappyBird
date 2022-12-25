    var dataBaseRanking = openDatabase("Ranking", "2.0", 'MyRanking', 4048)
    db.transaction(function(create){

        create.executeSQL("CREATE TABLE users (ID INTERGER PRIMARY KEY)")

    });
    function saveRanking(){
        var nome = document.querySelector('name').value;

        if (nome == ''){

            window.alert("Insert Your name please")


        }

        db.transaction(function(rankSave){

            create.executeSQL("INSERT INTO users (name, pontuaçao) VALUES (?,?)",[nome])
    
        });
    }




