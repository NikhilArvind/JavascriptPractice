var person = {
    "firstName" : "Nikhil",
    "lastName" : "Arvind",
    "getFullName" : function(){
      return this.firstName + " " + this.lastName;
    },
    "address" : {
      "street" : "123 JS street",
      "city" : "JS",
      "state" : "CA"
    },
    "isFromState" : function(state){
      if(this.address.state === state){return true;}else{false;}
    }
  };
  console.log(person.getFullName());
  person.isFromState("CA");