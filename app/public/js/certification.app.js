var app = new Vue({
  el: '#certificationPage',
  data: {
    certification: [{
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    }],
    newCertification: {
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    }
  },
  created() {
    this.fetchCertification();
  },

  methods: {
    fetchCertification() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certification=json;
        console.log(this.certification);
      });
    },
    createCertification(){
      //make a line for getting the // ID
      fetch('api/Certification/create_cert.php',{
      method:'POST',
      body: JSON.stringify(this.newCertification),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.certification.push(json[0]);
      this.newCertification = this.newCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },


  }
})
