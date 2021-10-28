var app = {
        
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnInserir").addEventListener("click",app.inserir);  
    },

    inserir: function(){
        let cnome = document.getElementById("txtNome").value;
        let ctelefone = document.getElementById("txtTelefone").value;
        let corigem = document.getElementById("txtOrigem").value;
        let cdata_contato = document.getElementById("txtDataContato").value;
        let cobservacao = document.getElementById("txtObservacao").value;

        var db = firebase.firestore();

        db.collection("cadastro").add({
            nome: cnome,
            telefone: ctelefone,
            origem: corigem,
            data_contato: cdata_contato,
            observacao: cobservacao
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            window.location.href = cordova.file.applicationDirectory + "www/index.html";
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

    }  
};

app.initialize();