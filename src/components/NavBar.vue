<template >
<nav >
 <v-app-bar flat clipped-left app height="80px" color="primary" class="custom-app-bar">
    <v-img max-width="50px" src="gitlab-logo-700.png" alt="logo" class="logo"></v-img>
    <v-app-bar-title class="title">Company</v-app-bar-title>
     <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-responsive  class="mx-auto"
    max-width="430"
    max-height="100">
           <v-text-field
        v-model="searchQuery"
        append-icon="mdi-magnify"
        outlined
        label="Search"
        small
        dense
        class="white custom-small-text-field"
        hide-details
      ></v-text-field>
      </v-responsive>
        <v-spacer></v-spacer>
        <v-icon small dark style="padding-right:20px;">
            mdi-translate
        </v-icon>
        <v-icon dark small padding-left="20px">
          mdi-bell
        </v-icon>
      <v-responsive   max-width="210"
    max-height="100" >
      <v-menu offset-y >
          <template v-slot:activator="{ on }" >
            <v-btn  v-on="on" class=" primary white--text"  style="margin-left:60px">
              <v-icon dark >mdi-account</v-icon>
              <v-list-item-content  >
                <v-list-item-title class="user-name">{{ selectedUser.name }}</v-list-item-title>
                <v-list-item-subtitle class="user-subtitle">{{ selectedUser.subtitle }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-btn>
          </template>
          <v-card> 
            <v-list>
              <v-list-item v-for="user in users" :key="user.id" @click="selectUser(user)">
                <v-icon>mdi-account</v-icon>
                <v-list-item-content   style="padding:10px">
                  <v-list-item-title>{{ user.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ user.subtitle }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list-item @click="signOut">
              <v-list-item-title>Sign Out <v-icon>mdi-logout</v-icon></v-list-item-title>
            </v-list-item>
          </v-card>
        </v-menu>
      
      </v-responsive>
  
      </v-app-bar>

<v-navigation-drawer app clipped height="100%"  v-model="drawer" color="success" position="fixed" >
    
    <v-list>
<v-list-item v-for="link in links" :key="link.text"  :to="link.route" router  class="nav-item" v-bind:class="{ 'active': link.route === selectedLink }"  active-class="active-item">
            <v-list-item-icon>
                <v-icon class="white--text">
              {{ link.icon }}
                </v-icon>
              </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

    </v-list>
</v-navigation-drawer>
   
</nav>
 

</template>

<script>
export default {
  
  data() {
    return {
  
      selectedUser: {
        id: 1,
        name: 'John Doe',
        subtitle: 'Software Engineer',
    
      },
      users: [
        {
          id: 1,
          name: 'John Doe',
          subtitle: 'Software Engineer',
         
        },
      ],
      searchQuery: '',
      drawer: false,
      links: [
          {icon:'mdi-view-dashboard' , text:'Dashboard', route:'/DashBoard'},
          { icon: 'mdi-account-multiple', text: 'Users', route:'/UserPage' },
      ],
    };
  },
   created() {
   
    
  },
  

  methods: {
    selectUser(user) {
      this.selectedUser = user;
    },
     signOut() {

    this.$router.push({ name: 'LoginForm' }); 
  },
  },
};
</script>

<style scoped>
.nav-item {
transition: border-left 0.3s, background-color 0.3s;
}
.active-item {
  border-left: 5px solid #ffffff; /* White border on hover */
}

.nav-item:hover {
  border-left: 5px solid #ffffff; /* White border on hover */
   background-color: rgba(255, 255, 255, 0.3); /* Transparent white background on hover */
}
.nav-item:active{
     background-color: rgba(255, 255, 255, 0.3); /* Transparent white background on hover */
       background-color: rgba(255, 255, 255, 0.3); /* Transparent white background on hover */
}
.custom-app-bar {
  height: 120px;
  width: 1700px; /* Adjust the desired width as needed */
  z-index: 2000; /* Ensure it's above other elements */
}
.title{
  color: #ffffff;
  padding-right : 80px;
}
nav {
  padding-left: 0 !important;
}
.logo{
  padding-left: 20px;
}
.user-name {
  text-align: left; /* Left-align the user name */
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 12px;
}

.user-subtitle {
  text-align: left; /* Left-align the user subtitle */
  font-size: 9px; /* Define the desired font size for the subtitle */
  padding-left :10px;
}

</style>