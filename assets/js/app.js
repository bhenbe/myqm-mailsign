var app = new Vue({
    el: '#app',
    data: {
      username: 'Nom et prénom',
      usertitle: 'Fonction chez MyQM',
      userphone: '+32 (0) 499 00 00 00',
      usermail: 'hello@myqm.io',
      code: '<p>code goes here</p>'
    },
    created: function () {
        this.code = document.getElementById("code").innerHTML;
        this.code = this.code.trim();
    },
    methods:{
        updateCode: function(evt){
            this.code = document.getElementById("code").innerHTML;
            this.code = this.code.trim();
        },
        saveCode: function(evt){
            document.getElementById("input-code").select();
            document.execCommand("copy");
            alert('Vous pouvez coller votre code !');
            return false;
        }
    }
  })