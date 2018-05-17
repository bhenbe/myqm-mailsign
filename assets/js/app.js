var app = new Vue({
    el: '#app',
    data: {
      username: '',
      usertitle: '',
      userphone: '',
      usermail: '',
      usermaillink: '',
      code: ''
    },
    watch: {
        usermail: function (newValue, oldValue) {
            this.usermaillink = "mailto:" + newValue;
        }
    },
    methods:{
        setCode: function(){
            this.code = document.getElementById("code").innerHTML;
            this.code = this.code.trim();
        },
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