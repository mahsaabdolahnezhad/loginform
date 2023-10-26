<template>
  <v-app>
    <v-container fluid class="container">
      <v-row justify="center" align="center" style="height: 100vh;">
        <v-col cols="12" sm="4" md="10">
          <v-card elevation="2" class="custom-card">
            <v-avatar size="130" class="center-avatar">
              <img src='/icons8-telecom-80.png'>
            </v-avatar>
            <v-card-title class="textpart">LOG IN</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                 <v-text-field
                 label="Username"
                  v-model="username"
                   required
                    prepend-inner-icon="mdi-account"
                    dark
                    color="white"
                    class="inputfield"
                   ></v-text-field>
               <v-text-field 
               label="Password"
                v-model="password"
               type="password"
               required
               prepend-inner-icon="mdi-lock"
               dark
                color="white"
                  class="inputfield"
               ></v-text-field>
               <v-responsive class="mx-auto"
    max-width="100"
    max-height="200">
                <v-btn
                  block
                  fab
                  color="white"
                  type="submit"
                  class="custom-button"
                  height="50px"
                >
                  Login
                </v-btn>
                </v-responsive>
                <span class="forgot-password">Forgot password?</span>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>


export default {
  data() {
    return {
      username: '',
      password: '',
      firstname:'john',
      lastname:'doe',
      
    };
  },
  methods: {
   login() {
  if (this.username === 'johndoe' && this.password === '13801122') {
      this.$store.commit('setUsername', this.username);
      this.$store.commit('setPassword', this.password);
      this.$store.commit('setFirstName', this.firstname);
      this.$store.commit('setLastName', this.lastname);

   
      


      this.$router.push({ name: 'NavBar' });
    }
   
    },
  },
};
</script>

<style scoped>
.container{
  background: url('C:\Users\mahsa\Downloads\internship\LoginForm\loginform\public\wide-angle-shot-satellite-tower-mountain.jpg');
   width: 100vw; 
  height: 100vh; 
  overflow: hidden; 
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 1;
}
.container::before {
  content: ''; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7); 
  z-index: -1; /* Place it below the background image */
  opacity: 1; /* Set the overlay to be fully visible */
}


.custom-card {
  width: 500px; 
  overflow: hidden;
  margin: 0 auto;
  padding: 57px 57px 37px;
  background: -webkit-linear-gradient(top, #7579ff, #b224ef);
  background: linear-gradient(to bottom, #7579ff, #b224ef);
  color: white;
  border-radius: 10px;
}

.center-avatar {
  margin: 0 auto; /* Center the avatar horizontally */
  display: block; /* Center the avatar vertically */
}

.text-center {
  text-align: center; /* Center the login text horizontally */
}



.custom-button {
  background-color: white;
  margin: 70px auto;
  padding-bottom: 70px;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s ease;
    font-size: 16px;
    color: #555;
    line-height: 1.2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px; /* Decreased padding */
   min-width: 120px; /* Smaller min-width */
  height: 30px; /* Smaller height */
  border-radius: 20px; /* Decreased border-radius */
    background: #9152f8;
    position: relative;
    z-index: 1;
    transition: all .4s;
}

.custom-button:hover {
 background: -webkit-linear-gradient(bottom,#7579ff,#b224ef);
  color: white;
}
.textpart{
    font-size: 30px;
    color: #fff;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    display: block;
}

.forgot-password {
  display: block;
  text-align: center;
  color: white;
  margin-top: 10px;
}
.inputfield{
   color: white;
}

</style>
