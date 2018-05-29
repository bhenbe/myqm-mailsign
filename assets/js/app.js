var app = new Vue({
    el: '#app',
    data: {
      username: '',
      usertitle: '',
      userphone: '',
      usermail: '',
      usermaillink: '',
      code: '',
      textFile: null
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
            var link = document.getElementById('download_link');
            link.href = this.downloadCode(this.code);
        },
        updateCode: function(evt){
            this.code = document.getElementById("code").innerHTML;
            this.code = this.code.trim();
            var link = document.getElementById('download_link');
            link.href = this.downloadCode(this.code);
            console.log(link.href);
        },
        saveCode: function(evt){
            document.getElementById("input-code").select();
            document.execCommand("copy");
            alert('Vous pouvez coller votre code !');
            return false;
        },
        downloadCode: function(the_code) {
            var code_file = new Blob([the_code], {type: 'text/plain'});
            if (this.textFile !== null) { window.URL.revokeObjectURL(this.textFile); }
            this.textFile = window.URL.createObjectURL(code_file);
            return this.textFile;
        }
    }
  })