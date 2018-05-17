var app = new Vue({
    el: '#app',
    data: {
      username: '',
      usertitle: '',
      userphone: '',
      usermail: '',
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